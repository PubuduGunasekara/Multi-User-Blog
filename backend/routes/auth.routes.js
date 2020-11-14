const express = require('express');
const router = express.Router();
const {
    preSignup,
    signup,
    signin,
    signout,
    requireSignIn,
    adminMiddleware,
    forgotPassword,
    resetPassword
} = require('../controllers/auth.controllers');

//validators
const { runValidation } = require('../validators');
const {
    userSignUpValidator,
    userSignInValidator,
    forgotPasswordValidator,
    resetPasswordValidator
} = require('../validators/auth.validator');

router.post('/signup', requireSignIn, adminMiddleware, userSignUpValidator, runValidation, preSignup);
router.post('/verify-signup', signup);
router.post('/signin', userSignInValidator, runValidation, signin);
router.get('/signout', signout);

router.put('/forgot-password', forgotPasswordValidator, runValidation, forgotPassword);
router.put('/reset-password', resetPasswordValidator, runValidation, resetPassword);

module.exports = router;