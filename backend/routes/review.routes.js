const express = require("express");
const router = express.Router();
const {
  adminMiddleware,
  requireSignIn,
  authMiddleware,
} = require("../controllers/auth.controllers");
const {
  create,
  listPublic,
  listPrivate,
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
  listForNewsMobile,
  listForHomePage,
  listRelated,
  listRelatedMobiles,
  listRelatedNews,
  listSearchUser,
  listPublicTopStories,
  listPublicLatestReview,
  listPublicSecondLatestReview,
  listPublicEighthLatestReview,
  listLimitedReviewsSectionOne,
  listLimitedReviewsSectionTwo,
} = require("../controllers/review.controllers");

router.post("/review", requireSignIn, authMiddleware, create);
router.get("/reviews-public-root", listPublic); //done (REVIEWS>INDEX)
router.get("/reviews-private-root", listPrivate);
router.get("/reviews/photo/:slug", photo);
router.get("/review/:slug", read);
router.delete("/review/:slug", requireSignIn, adminMiddleware, remove);
router.put("/review/:slug", requireSignIn, adminMiddleware, update);
router.get(
  "/review/approve/:slug",
  requireSignIn,
  adminMiddleware,
  approvePost
);
router.get(
  "/review/un-publish/:slug",
  requireSignIn,
  adminMiddleware,
  unPublishPost
);
router.get("/review-search/search", listSearchAdmin);
router.get("/review-search-moderator/search", listSearchModerator);

//end user routes
router.get("/newsTopStories", listPublicTopStories);
router.get("/reviews-news-mobile", listForNewsMobile); //done (NEWS>INDEX)
router.get("/reviews-home", listForHomePage); //done (INDEX)
router.post("/review/related", listRelated);
router.post("/review/news-related", listRelatedNews);
router.post("/review/mobiles-related", listRelatedMobiles);
router.get("/review-search-user/search", listSearchUser);
router.get("/review-public-latest", listPublicLatestReview); //done (INDEX)
router.get("/review-public-second-latest", listPublicSecondLatestReview); //done (INDEX)
router.get("/review-public-eight-latest", listPublicEighthLatestReview); //done (INDEX)
router.get(
  "/review-public-limited-list-section-one",
  listLimitedReviewsSectionOne
); //done (INDEX)
router.get(
  "/review-public-limited-list-section-two",
  listLimitedReviewsSectionTwo
); //done (INDEX)

//moderator
router.get("/review/moderator-private/:id", listForModeratorPrivate);
router.get("/review/moderator-public/:id", listForModeratorPublic);

module.exports = router;
