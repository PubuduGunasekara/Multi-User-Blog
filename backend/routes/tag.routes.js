const express = require('express');
const router = express.Router();

const { requireSignIn, authMiddleware } = require('../controllers/auth.controllers');
const { create, list, remove,read } = require('../controllers/tag.controllers');

//validators
const { runValidation } = require('../validators');
const { tagCreateValidator } = require('../validators/tag');

router.post('/tag', requireSignIn, authMiddleware, tagCreateValidator, runValidation, create);
router.get('/tags', list);
router.get('/tag/:slug', read);
router.delete('/tag/:slug', requireSignIn, authMiddleware, remove);

module.exports = router;