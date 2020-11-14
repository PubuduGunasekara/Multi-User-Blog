const { check } = require('express-validator');

exports.userSignUpValidator = [
    check('name')
        .not()
        .isEmpty()
        .withMessage('Name is required'),
    check('email')
        .not()
        .isEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Must be a Email address'),
    check('password')
        .not()
        .isEmpty()
        .withMessage('Password is required')
        .isLength({ min: 6 })
        .withMessage('Password must be atleast 6 characters long'),

];

exports.userSignInValidator = [
    check('email')
        .not()
        .isEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Must be a Email address'),
    check('password')
        .not()
        .isEmpty()
        .withMessage('Password is required')
        .isLength({ min: 6 })
        .withMessage('Password must be atleast 6 characters long'),

];

exports.forgotPasswordValidator = [
    check('email')
        .not()
        .isEmpty()
        .withMessage('Email is required')
        .isEmail()
        .withMessage('Must be a Email address')

];

exports.resetPasswordValidator = [
    check('newPassword')
        .not()
        .isEmpty()
        .withMessage('Password is required')
        .isLength({ min: 6 })
        .withMessage('Password must be atleast 6 characters long')

];