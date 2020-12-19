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
  listPublicReleventBrands,
  photo,
  read,
  remove,
  update,
  approvePost,
  unPublishPost,
  listSearchAdmin,
  listForNewsReviews,
  listRelated,
  listRelatedNews,
  listRelatedReviews,
  listSearchUser,
} = require("../controllers/mobile.controller");

router.post("/mobile", requireSignIn, adminMiddleware, create);
router.get("/mobile-private-root", listPrivate);
router.get("/mobile-public-root", listPublic); //done(phone>brand>slug)
router.get("/mobile/photo/:slug", photo);
router.get("/mobile/:slug", read); //done(phone>brand>slug)
router.delete("/mobile/:slug", requireSignIn, adminMiddleware, remove);
router.put("/mobile/:slug", requireSignIn, adminMiddleware, update);
router.get(
  "/mobile/approve/:slug",
  requireSignIn,
  adminMiddleware,
  approvePost
);
router.get(
  "/mobile/un-publish/:slug",
  requireSignIn,
  adminMiddleware,
  unPublishPost
);
router.get("/mobile-search/search", listSearchAdmin);

//end user routes
router.get("/mobile-search-user/search", listSearchUser); //done SEARCH)
router.get("/mobile-news-reviews", listForNewsReviews); //done (INDEX,NEWS>INDEX,REVIEWS>INDEX)
router.post("/mobile/related", listRelated); //done(phone>brands>slug)
router.post("/mobile/news-related", listRelatedNews); //done(phone>brands>slug)
router.post("/mobile/reviews-related", listRelatedReviews); //done(phone>brands>slug)
router.get("/mobile-brands-list/:id", listPublicReleventBrands); //done(phone>brands>slug)

module.exports = router;
