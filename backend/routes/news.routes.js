const express = require("express");
const router = express.Router();
const {
  adminMiddleware,
  requireSignIn,
  authMiddleware,
} = require("../controllers/auth.controllers");
const {
  create,
  listPrivate,
  listPublic,
  photo,
  read,
  remove,
  update,
  approvePost,
  unPublishPost,
  listForModeratorPrivate,
  listForModeratorPublic,
  listSearchAdmin,
  listSearchModerator,
  listForMobileReviews,
  listRelated,
  listRelatedMobiles,
  listRelatedReviews,
  listSearchUser,
  listPublicTopStories,
  listPublicLatestNews,
  listPublicSecondLatestNews,
  listPublicLimitFirstSection,
  listPublicLimitSecondSection,
  listPublicLimitFinalSection
} = require("../controllers/news.controller");

router.post("/news", requireSignIn, authMiddleware, create);
router.get("/news-private-root", listPrivate);
router.get("/news-public-root", listPublic);
router.get("/news/photo/:slug", photo);
router.get("/news/:slug", read);
router.delete("/news/:slug", requireSignIn, adminMiddleware, remove);
router.put("/news/:slug", requireSignIn, adminMiddleware, update);
router.get("/news/approve/:slug", requireSignIn, adminMiddleware, approvePost);
router.get(
  "/news/un-publish/:slug",
  requireSignIn,
  adminMiddleware,
  unPublishPost
);
router.get("/news-search/search", listSearchAdmin);
router.get("/news-search-moderator/search", listSearchModerator);

//end user routes
router.post("/newsTopStories", listPublicTopStories);
router.get("/news-mobile-reviews", listForMobileReviews);
router.post("/news/related", listRelated);
router.post("/news/reviews-related", listRelatedReviews);
router.post("/news/mobiles-related", listRelatedMobiles);
router.get("/news-search-user/search", listSearchUser);
router.get("/news-public-latest", listPublicLatestNews);
router.get("/news-public-second-latest", listPublicSecondLatestNews);
router.get("/news-public-limit-first-section", listPublicLimitFirstSection);
router.get("/news-public-limit-second-section", listPublicLimitSecondSection);
router.post("/news-public-limit-final-section", listPublicLimitFinalSection);

//moderator
router.get("/news/moderator-private/:id", listForModeratorPrivate);
router.get("/news/moderator-public/:id", listForModeratorPublic);

module.exports = router;
