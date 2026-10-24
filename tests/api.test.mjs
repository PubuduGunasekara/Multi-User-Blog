// Black-box API tests for the Express backend.
// Starts backend/server.js as a child process against a throwaway MongoDB database,
// seeds two users directly (the app has no public sign-up), then exercises the API over HTTP.
//
// Run:  TEST_DATABASE=mongodb://localhost:27017/seoblog_test node --test tests/api.test.mjs
//
// Tests named "KNOWN ISSUE" assert the secure/correct behaviour and are marked `todo`:
// they currently fail and document a real limitation instead of hiding it.

import { test, before, after } from "node:test";
import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { createRequire } from "node:module";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const BACKEND = path.join(ROOT, "backend");
const require = createRequire(path.join(BACKEND, "server.js"));

const DATABASE = process.env.TEST_DATABASE;
if (!DATABASE || !/test/i.test(DATABASE)) {
  throw new Error("Set TEST_DATABASE to a MongoDB URI whose database name contains 'test' (it is wiped).");
}
const PORT = process.env.TEST_PORT || "8123";
const API = `http://localhost:${PORT}/api`;
const ENV = {
  ...process.env,
  NODE_ENV: "development",
  APP_NAME: "SEOBLOG",
  PORT,
  CLIENT_URL: "http://localhost:3000",
  DATABASE,
  JWT_SECRET: "test-jwt-secret",
  JWT_ACCOUNT_ACTIVATION: "test-activation-secret",
  JWT_RESET_PASSWORD: "test-reset-secret",
  SENDGRID_API_KEY: "SG.test-placeholder",
  EMAIL_FROM: "noreply@example.test",
};
Object.assign(process.env, ENV);

const mongoose = require("mongoose");
const User = require("./models/user.model");
const Tag = require("./models/tag.model");
const Review = require("./models/review.model");
const News = require("./models/news.model");
const Mobile = require("./models/mobile.model");
const MobileCategory = require("./models/mobileCategory.model");

const PHOTO = readFileSync(path.join(ROOT, "frontend/public/static/images/resize-reviewcover.jpg"));
const BODY = "<p>" + "Sample body text for an automated test. ".repeat(10) + "</p>";
const ADMIN = { email: "admin@example.test", password: "test-admin-pass" };
const WRITER = { email: "writer@example.test", password: "test-writer-pass" };

let server;
let adminToken;
let writerToken;
let writerId;
let tagId;

const json = (method, url, body, token) =>
  fetch(API + url, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    body: body && JSON.stringify(body),
  });

const get = (url, token) =>
  fetch(API + url, { headers: token ? { Authorization: `Bearer ${token}` } : {} });

const form = (method, url, fields, token, photo = PHOTO) => {
  const fd = new FormData();
  for (const [k, v] of Object.entries(fields)) fd.append(k, v);
  if (photo) fd.append("photo", new Blob([photo], { type: "image/jpeg" }), "photo.jpg");
  return fetch(API + url, {
    method,
    headers: token ? { Authorization: `Bearer ${token}` } : {},
    body: fd,
  });
};

const signin = async (creds) => (await (await json("POST", "/signin", creds)).json()).token;

const createReview = (title, token = writerToken, extra = {}) =>
  form("POST", "/review", { title, body: BODY, tags: tagId, ...extra }, token);

const createNews = (title, token = writerToken) =>
  form("POST", "/news", { title, body: BODY, tags: tagId }, token);

before(async () => {
  await mongoose.connect(DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  await mongoose.connection.db.dropDatabase();
  await Promise.all([User, Tag, Review, News, Mobile, MobileCategory].map((m) => m.init()));
  await new User({ name: "Admin", username: "admin", role: 1, ...ADMIN }).save();
  const writer = await new User({ name: "Writer", username: "writer", ...WRITER }).save();
  writerId = String(writer._id);

  server = spawn(process.execPath, ["server.js"], { cwd: BACKEND, env: ENV, stdio: "ignore" });
  for (let i = 0; i < 50; i++) {
    try {
      await fetch(`${API}/tags`);
      break;
    } catch {
      await new Promise((r) => setTimeout(r, 100));
    }
  }
  adminToken = await signin(ADMIN);
  writerToken = await signin(WRITER);
  const tag = await (await json("POST", "/tag", { name: "Android" }, writerToken)).json();
  tagId = tag._id;
});

after(async () => {
  server?.kill();
  await mongoose.connection.db.dropDatabase();
  await mongoose.disconnect();
});

// ---------- Authentication ----------

test("signin returns a JWT and the public user fields only", async () => {
  const res = await json("POST", "/signin", WRITER);
  assert.equal(res.status, 200);
  const data = await res.json();
  assert.match(data.token, /^[\w-]+\.[\w-]+\.[\w-]+$/);
  assert.deepEqual(Object.keys(data.user).sort(), ["_id", "email", "name", "role", "username"]);
  assert.match(res.headers.get("set-cookie"), /^token=/);
});

test("signin rejects a wrong password", async () => {
  const res = await json("POST", "/signin", { ...WRITER, password: "wrong-password" });
  assert.equal(res.status, 400);
  assert.equal((await res.json()).error, "Email and password do not match");
});

test("signin returns 404 for an unknown email", async () => {
  const res = await json("POST", "/signin", { email: "nobody@example.test", password: "whatever1" });
  assert.equal(res.status, 404);
});

test("signin validates input (422 for a malformed email)", async () => {
  const res = await json("POST", "/signin", { email: "not-an-email", password: "123456" });
  assert.equal(res.status, 422);
  assert.equal((await res.json()).error, "Must be a Email address");
});

test("signin validates input (422 for a short password)", async () => {
  const res = await json("POST", "/signin", { email: "a@example.test", password: "123" });
  assert.equal(res.status, 422);
});

test("passwords are stored as a salted hash, not plain text", async () => {
  const user = await User.findOne({ email: WRITER.email }).lean();
  assert.notEqual(user.hashed_password, WRITER.password);
  assert.match(user.hashed_password, /^[0-9a-f]{40}$/);
  assert.ok(user.salt);
});

test("signout clears the token cookie", async () => {
  const res = await get("/signout");
  assert.equal(res.status, 200);
  assert.match(res.headers.get("set-cookie"), /^token=;/);
});

test("a tampered JWT is rejected on a protected route", async () => {
  const res = await get("/user/profile", writerToken.slice(0, -2) + "xx");
  assert.equal(res.status, 401);
});

// ---------- Authorization ----------

test("signup (inviting a user) requires a token", async () => {
  const res = await json("POST", "/signup", { name: "x", email: "x@example.test", password: "123456" });
  assert.equal(res.status, 401);
});

test("signup (inviting a user) is admin-only", async () => {
  const res = await json("POST", "/signup", { name: "x", email: "x@example.test", password: "123456" }, writerToken);
  assert.equal(res.status, 400);
  assert.equal((await res.json()).error, "Admin resource. Access denied!");
});

test("creating a post requires sign-in", async () => {
  const res = await form("POST", "/review", { title: "No auth", body: BODY, tags: tagId });
  assert.equal(res.status, 401);
});

test("only an admin can create a phone", async () => {
  const res = await form("POST", "/mobile", { title: "Phone" }, writerToken);
  assert.equal(res.status, 400);
  assert.equal((await res.json()).error, "Admin resource. Access denied!");
});

test("an author cannot approve, edit or delete posts", async () => {
  await createReview("Author permission check");
  for (const res of [
    await get("/review/approve/author-permission-check", writerToken),
    await form("PUT", "/review/author-permission-check", { title: "x" }, writerToken),
    await json("DELETE", "/review/author-permission-check", null, writerToken),
  ]) {
    assert.equal(res.status, 400);
  }
});

test("the profile endpoint returns the signed-in user without the password hash", async () => {
  const res = await get("/user/profile", writerToken);
  assert.equal(res.status, 200);
  const data = await res.json();
  assert.equal(data.username, "writer");
  assert.equal(data.hashed_password, undefined);
});

// ---------- Post validation ----------

test("post creation requires a title", async () => {
  const res = await form("POST", "/review", { body: BODY, tags: tagId }, writerToken);
  assert.equal((await res.json()).error, "Title is required");
});

test("post creation rejects titles over 160 characters", async () => {
  const res = await createReview("x".repeat(161));
  assert.equal((await res.json()).error, "Title is too long");
});

test("post creation rejects a body under 200 characters", async () => {
  const res = await form("POST", "/review", { title: "Short", body: "too short", tags: tagId }, writerToken);
  assert.equal((await res.json()).error, "Content is too short");
});

test("post creation requires at least one tag", async () => {
  const res = await form("POST", "/review", { title: "No tags", body: BODY }, writerToken);
  assert.equal((await res.json()).error, "At least one tag is required");
});

test("post creation requires a featured photo", async () => {
  const res = await form("POST", "/review", { title: "No photo", body: BODY, tags: tagId }, writerToken, null);
  assert.equal((await res.json()).error, "Featured photo cannot be empty");
});

test("post creation rejects photos over 1 MB", async () => {
  const big = Buffer.alloc(1_000_001);
  const res = await form("POST", "/review", { title: "Big photo", body: BODY, tags: tagId }, writerToken, big);
  assert.equal((await res.json()).error, "Image should be less than 1mb in size");
});

test("a new post gets a slug, excerpt and SEO fields, and starts unpublished", async () => {
  const res = await createReview("Generated Fields Check");
  assert.equal(res.status, 200);
  const post = await res.json();
  assert.equal(post.slug, "generated-fields-check");
  assert.equal(post.flag, 0);
  assert.equal(post.mtitle, "Generated Fields Check | SEOBLOG");
  assert.ok(post.mdesc.length <= 160 && !post.mdesc.includes("<p>"));
  assert.ok(post.excerpt.endsWith(" ..."));
  assert.deepEqual(post.tags, [tagId]);
  assert.equal(post.postedBy, writerId);
});

test("a duplicate title is rejected by the unique slug index", async () => {
  await createReview("Duplicate Title");
  const res = await createReview("Duplicate Title");
  assert.equal(res.status, 400);
  // dbErrorHandler parses an older MongoDB error format, so the message is garbled
  // ("11000 duplicate key error collection: ... slug already exists") but still names the field.
  assert.match((await res.json()).error, /slug already exists$/);
});

// ---------- Approval workflow ----------

test("an unpublished post is hidden from public endpoints", async () => {
  await createReview("Hidden Until Approved");
  const list = await (await get("/reviews-public-root")).json();
  assert.ok(!list.some((p) => p.slug === "hidden-until-approved"));
  assert.equal((await get("/review/hidden-until-approved")).status, 404);
  const search = await (await get("/review-search-user/search?search=hidden")).json();
  assert.equal(search.length, 0);
});

test("an admin approves a post and it becomes public", async () => {
  await createReview("Approve Me");
  const approved = await (await get("/review/approve/approve-me", adminToken)).json();
  assert.equal(approved.flag, 1);
  const list = await (await get("/reviews-public-root")).json();
  assert.ok(list.some((p) => p.slug === "approve-me"));
  const single = await (await get("/review/approve-me")).json();
  assert.equal(single.data.title, "Approve Me");
  assert.equal(single.data.postedBy.username, "writer");
});

test("an admin can unpublish a post again", async () => {
  await createReview("Unpublish Me");
  await get("/review/approve/unpublish-me", adminToken);
  const res = await (await get("/review/un-publish/unpublish-me", adminToken)).json();
  assert.equal(res.flag, 0);
  assert.equal((await get("/review/unpublish-me")).status, 404);
});

test("an admin can edit a post; the slug stays the same", async () => {
  await createReview("Edit Me");
  const res = await form("PUT", "/review/edit-me", { title: "Edited Title", body: BODY, tags: tagId }, adminToken, null);
  const post = await res.json();
  assert.equal(post.title, "Edited Title");
  assert.equal(post.slug, "edit-me");
});

test("an admin can delete a post", async () => {
  await createReview("Delete Me");
  const res = await json("DELETE", "/review/delete-me", null, adminToken);
  assert.equal(res.status, 200);
  assert.equal(await Review.countDocuments({ slug: "delete-me" }), 0);
});

test("the approval workflow also applies to news", async () => {
  await createNews("News Approval");
  assert.equal((await get("/news/news-approval")).status, 404);
  await get("/news/approve/news-approval", adminToken);
  assert.equal((await get("/news/news-approval")).status, 200);
});

// ---------- Queries: sorting, pagination, related, search, tags ----------

test("'load more' pagination returns non-overlapping pages, newest first", async () => {
  for (let i = 1; i <= 6; i++) {
    await createNews(`Paged News ${i}`);
    await get(`/news/approve/paged-news-${i}`, adminToken);
  }
  const page = async (skip) =>
    (await (await json("POST", "/news-public-limit-final-section", { skip, limit: 3 })).json()).map((n) => n.slug);
  const first = await page(0);
  const second = await page(3);
  assert.equal(first.length, 3);
  assert.equal(second.length, 3);
  assert.equal(new Set([...first, ...second]).size, 6);
  assert.deepEqual(first, ["paged-news-6", "paged-news-5", "paged-news-4"]);
});

test("related reviews share a tag and exclude the current post", async () => {
  for (const t of ["Related One", "Related Two"]) {
    await createReview(t);
    await get(`/review/approve/${t.toLowerCase().replace(" ", "-")}`, adminToken);
  }
  const current = await (await get("/review/related-one")).json();
  const related = await (await json("POST", "/review/related", { blog: current })).json();
  const slugs = related.map((r) => r.slug);
  assert.ok(slugs.includes("related-two"));
  assert.ok(!slugs.includes("related-one"));
  assert.ok(related.length <= 5);
});

test("public search is case-insensitive and returns published posts only", async () => {
  await createReview("Searchable Phone Review");
  await get("/review/approve/searchable-phone-review", adminToken);
  await createReview("Searchable Draft");
  const results = await (await get("/review-search-user/search?search=SEARCHABLE")).json();
  assert.deepEqual(results.map((r) => r.slug), ["searchable-phone-review"]);
});

test("tags get a lowercase slug and duplicates are rejected", async () => {
  const tag = await (await json("POST", "/tag", { name: "Camera Phones" }, writerToken)).json();
  assert.equal(tag.slug, "camera-phones");
  const dup = await json("POST", "/tag", { name: "Camera Phones" }, writerToken);
  assert.equal(dup.status, 400);
});

test("a tag page returns the tag with its reviews, news and phones", async () => {
  const data = (await (await get("/tag/android")).json()).data;
  assert.equal(data.tag.slug, "android");
  assert.ok(Array.isArray(data.news) && Array.isArray(data.reviews) && Array.isArray(data.mobiles));
  assert.ok(data.reviews.length > 0);
});

test("a public profile lists the author's posts", async () => {
  const data = (await (await get("/user/publicProfile/writer")).json()).data;
  assert.equal(data.user.username, "writer");
  assert.equal(data.user.email, undefined);
  assert.ok(data.reviews.length > 0);
});

test("photos are served with their stored content type", async () => {
  await createReview("Photo Served");
  const res = await get("/reviews/photo/photo-served");
  assert.equal(res.headers.get("content-type"), "image/jpeg");
  assert.equal(Buffer.from(await res.arrayBuffer()).length, PHOTO.length);
});

// ---------- Database ----------

test("MongoDB has unique indexes on slugs, username and email only", async () => {
  const keys = async (model) =>
    (await model.collection.indexes()).filter((i) => i.unique).map((i) => Object.keys(i.key)[0]).sort();
  assert.deepEqual(await keys(User), ["email", "username"]);
  for (const model of [Review, News, Mobile, MobileCategory, Tag]) {
    assert.deepEqual(await keys(model), ["slug"]);
  }
});

// ---------- Known issues (expected to fail; see README "Known limitations") ----------

test("KNOWN ISSUE: an author cannot promote themselves to admin via profile update", { todo: true }, async () => {
  const token = await signin(WRITER);
  await form("PUT", "/user/update", { role: "1" }, token, null);
  const user = await User.findOne({ email: WRITER.email }).lean();
  await User.updateOne({ email: WRITER.email }, { role: 0 });
  assert.equal(user.role, 0);
});

test("KNOWN ISSUE: pending posts are not listed without authentication", { todo: true }, async () => {
  await createReview("Private Draft");
  const res = await get("/reviews-private-root");
  assert.equal(res.status, 401);
});

test("KNOWN ISSUE: the user list (with emails) requires authentication", { todo: true }, async () => {
  const res = await get("/user/profiles/list");
  assert.equal(res.status, 401);
});

test("KNOWN ISSUE: search treats regex characters as plain text", { todo: true }, async () => {
  const res = await get("/review-search-user/search?search=(");
  assert.equal(res.status, 200);
});

test("KNOWN ISSUE: public profiles hide unpublished posts", { todo: true }, async () => {
  await createReview("Profile Draft");
  const data = (await (await get("/user/publicProfile/writer")).json()).data;
  assert.ok(!data.reviews.some((r) => r.slug === "profile-draft"));
});

// Keep this last: today the request crashes the server process.
test("KNOWN ISSUE: editing a post that does not exist returns 404", { todo: true }, async () => {
  const res = await form("PUT", "/review/does-not-exist", { title: "x", body: BODY, tags: tagId }, adminToken, null);
  assert.equal(res.status, 404);
});
