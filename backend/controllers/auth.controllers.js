const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");
const { errorHandler } = require("../helpers/dbErrorHandler");
const sgMail = require("@sendgrid/mail");
const shortId = require("shortid");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const _ = require("lodash");

exports.preSignup = (req, res) => {
  const { name, email, password } = req.body;

  User.findOne({ email: email.toLowerCase() }, (err, user) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    } else if (user) {
      return res.status(400).json({
        error: "Email is already taken",
      });
    }

    const token = jwt.sign(
      { name, email, password },
      process.env.JWT_ACCOUNT_ACTIVATION,
      { expiresIn: "10m" }
    );

    const emailData = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject: `Account activation link`,
      html: `
                <p>please use the following link to activate your account</p>
                <p>${process.env.CLIENT_URL}/admin-panel/auth/account/activate/${token}</p>
                <hr />
                <p>This email may contain sensitive informations</p>
                <p>https://seoblog.com</p>`,
    };

    sgMail
      .send(emailData)
      .then((sent) => {
        return res.status(200).json({
          message: `Email has been sent to ${email}.Follow the instructions to activate the account. Link expires in 10 minutes.`,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          error: err.response.body.errors[0].message,
        });
      });
  });
};

exports.signup = (req, res) => {
  const token = req.body.token;

  if (token) {
    jwt.verify(
      token,
      process.env.JWT_ACCOUNT_ACTIVATION,
      function (err, decoded) {
        if (err) {
          return res.status(401).json({
            error: "Expired link, please signup again",
          });
        }

        const { name, email, password } = jwt.decode(token);

        //generate an username using shortid
        let username = shortId.generate();

        const user = new User({ name, email, password, username });

        user.save((err, user) => {
          if (err) {
            return res.status(400).json({
              error: errorHandler(err),
            });
          }

          return res.status(200).json({
            message:
              "You have successfully activated your account. please sign in",
          });
        });
      }
    );
  } else {
    return res.status(401).json({
      error: "Something went wrong. Please try again",
    });
  }
};

//{done}signin method for admins
exports.signin = (req, res) => {
  const { email, password } = req.body;

  //check if user exist
  User.findOne({ email }).exec((err, user) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    } else if (!user) {
      return res.status(404).json({
        error: "User with that email does not exist.please sign up",
      });
    }

    //authenticate
    if (!user.authenticate(password)) {
      return res.status(400).json({
        error: "Email and password do not match",
      });
    }

    //generate jsonwebtoken
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.cookie("token", token, { expiresIn: "1d" });

    const { _id, name, username, email, role } = user;

    return res.status(200).json({
      token,
      user: { _id, name, username, email, role },
    });
  });
};

exports.signout = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({
    message: "Signout success",
  });
};

exports.requireSignIn = expressJwt({
  secret: process.env.JWT_SECRET,
});

exports.authMiddleware = (req, res, next) => {
  const authUserId = req.user._id;
  User.findById({ _id: authUserId }).exec((err, user) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    } else if (!user) {
      return res.status(400).json({
        error: "User not found",
      });
    }

    req.profile = user;
    next();
  });
};

exports.adminMiddleware = (req, res, next) => {
  const adminUserId = req.user._id;

  User.findById({ _id: adminUserId }).exec((err, user) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    } else if (!user) {
      return res.status(400).json({
        error: "User not found",
      });
    }

    if (user.role !== 1) {
      return res.status(400).json({
        error: "Admin resource. Access denied!",
      });
    }
    req.profile = user;
    next();
  });
};

//{done}
exports.forgotPassword = (req, res) => {
  const { email } = req.body;

  User.findOne({ email }, (err, user) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    } else if (!user) {
      return res.status(404).json({
        error: "User with that email does not exist",
      });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_RESET_PASSWORD, {
      expiresIn: "10m",
    });

    //email

    const emailData = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject: `password reset link`,
      text: `skhvbksbvk`,
      html: `
                <p>please use the following link to reset your password:</p>
                <p>${process.env.CLIENT_URL}/admin-panel/auth/password/reset/${token}</p>
                <hr />
                <p>This email may contain sensitive informations</p>
                <p>https://seoblog.com</p>`,
    };
    //ppulate the db>user>resetPw link
    return user.updateOne({ resetPasswordLink: token }, (err, success) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      } else {
        sgMail
          .send(emailData)
          .then((sent) => {
            return res.status(200).json({
              success: true,
              message: `Email has been sent to ${email}.Follow the instructions to reset the password.Link expires in 10 minutes.`,
            });
          })
          .catch((err) => {
            return res.status(400).json({
              success: false,
              message: err.response.body.errors[0].message,
            });
          });
      }
    });
  });
};

//{done}
exports.resetPassword = (req, res) => {
  const { resetPasswordLink, newPassword } = req.body;

  if (resetPasswordLink) {
    jwt.verify(
      resetPasswordLink,
      process.env.JWT_RESET_PASSWORD,
      function (err, decoded) {
        if (err) {
          return res.status(401).json({
            error: "Expired link. Try again",
          });
        }

        User.findOne({ resetPasswordLink }, (err, user) => {
          if (err) {
            return res.status(400).json({
              error: errorHandler(err),
            });
          } else if (!user) {
            return res.status(404).json({
              error: "Something went wrong. Try again later",
            });
          }

          const updatedFields = {
            password: newPassword,
            resetPasswordLink: "",
          };

          user = _.extend(user, updatedFields);
          user.save((err, result) => {
            if (err) {
              return res.status(400).json({
                error: errorHandler(err),
              });
            }

            res.status(200).json({
              message: `Great! now you can login with new pasword`,
            });
          });
        });
      }
    );
  }
};
