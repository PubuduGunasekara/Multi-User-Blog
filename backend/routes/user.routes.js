const express = require("express");
const router = express.Router();
const {
  adminMiddleware,
  authMiddleware,
  requireSignIn,
} = require("../controllers/auth.controllers");
const {
  read,
  photo,
  update,
  list,
  publicProfile,
} = require("../controllers/user.controller");

router.get("/user/profile", requireSignIn, authMiddleware, read);
router.put("/user/update", requireSignIn, authMiddleware, update);
router.get("/user/photo/:username", photo);
router.get("/user/profiles/list", list); //done (PROFILES>SLUG)
//router.get('/user/publicUserProfile/:username', publicUserProfile);
router.get("/user/publicProfile/:username", publicProfile); //done (PROFILES>SLUG)

module.exports = router;
