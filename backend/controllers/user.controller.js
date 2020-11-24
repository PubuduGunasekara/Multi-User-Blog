const User = require("../models/user.model");
const Review = require("../models/review.model");
const News = require("../models/news.model");
const { errorHandler } = require("../helpers/dbErrorHandler");
const _ = require("lodash");
const formidable = require("formidable");
const fs = require("fs");

exports.read = (req, res) => {
  req.profile.hashed_password = undefined;
  return res.json(req.profile);
};

/*exports.publicUserProfile = (req,res) => {
    let username = req.params.username; 

    User.findOne({username:username})
        .select('name username about')
        .exec((err,data)=>{
            if (err || !data) {
                return res.status(400), json({
                    error: 'User not found'
                })
            }

            res.json(data);
        });
};*/

/**this function fetch the all user details and news,reviews (PROFILES>SLUG) */
exports.publicProfile = (req, res) => {
  let username = req.params.username.toLowerCase();
  User.findOne({ username })
    .select("_id name username about occupation publishedEmail createdAt")
    .exec((err, user) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      News.find({ postedBy: user })
        .populate("postedBy", "name")
        .sort({ updatedAt: -1 })
        .select("title slug postedBy updatedAt")
        .exec((err, newsData) => {
          if (err) {
            return res.status(400).json({
              error: errorHandler(err),
            });
          }
          if (newsData) {
            Review.find({ postedBy: user })
              .populate("postedBy", "name")
              .sort({ updatedAt: -1 })
              .select("title slug postedBy updatedAt")
              .exec((err, reviewData) => {
                if (err) {
                  return res.status(400).json({
                    error: errorHandler(err),
                  });
                }
                res.json({
                  data: {
                    news: newsData,
                    reviews: reviewData,
                    user: user,
                  },
                });
              });
          } else {
            res.json({
              data: {
                news: newsData,
                reviews: reviewData,
                user: user,
              },
            });
          }
        });
    });
};

/**done (userProfile) */
// exports.publicProfile = (req, res) => {
//   let username = req.params.username.toLowerCase();
//   let user;

//   User.findOne({ username })
//     .select("_id name username about occupation publishedEmail createdAt")
//     .exec((err, userFromDB) => {
//       if (err || !userFromDB) {
//         return res.status(400).json({
//           error: "User not found",
//         });
//       }

//       user = userFromDB;
//       let userId = user._id;

//       Review.find({ postedBy: userFromDB })
//         .populate("postedBy", "username")
//         .select("title slug categories postedBy updatedAt")
//         .exec((err, reviewData) => {
//           if (err) {
//             return res.status(400).json({
//               data: { error: errorHandler(err) },
//             });
//           }
//           if (reviewData) {
//             News.find({ postedBy: userFromDB })
//               .populate("postedBy", "username")
//               .select("title slug postedBy updatedAt")
//               .exec((err, newsData) => {
//                 if (err) {
//                   return res.status(400).json({
//                     data: { error: errorHandler(err) },
//                   });
//                 }
//                 res.json({
//                   data: {
//                     user: user,
//                     allReviewsFromUser: reviewData,
//                     allNewsFromUser: newsData,
//                   },
//                 });
//               });
//           } else {
//             News.find({ postedBy: userId })
//               .populate("postedBy", "username")
//               .select("title slug postedBy updatedAt")
//               .exec((err, newsData) => {
//                 if (err) {
//                   return res.status(400).json({
//                     data: { error: errorHandler(err) },
//                   });
//                 }
//                 res.json({
//                   data: {
//                     user: user,
//                     allReviewsFromUser: reviewData,
//                     allNewsFromUser: newsData,
//                   },
//                 });
//               });
//           }
//         });
//     });
// };

exports.update = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Photo could not be uploaded",
      });
    }

    let user = req.profile;
    user = _.extend(user, fields);

    if (fields.password && fields.password.length < 6) {
      return res.status(400).json({
        error: "Password should be min 6 characters long",
      });
    }

    if (files.photo) {
      if (files.photo.size > 1000000) {
        return res.status(400).json({
          error: "Image should be less than 1mb",
        });
      }

      user.photo.data = fs.readFileSync(files.photo.path);
      user.photo.contentType = files.photo.type;
    }

    user.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }

      user.hashed_password = undefined;
      user.salt = undefined;
      user.photo = undefined;
      res.json(user);
      console.log(user);
    });
  });
};

exports.photo = (req, res) => {
  const username = req.params.username;

  User.findOne({ username })
    .select("photo")
    .exec((err, user) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      } else if (!user) {
        return res.status(400).json({
          error: "User not found",
        });
      }

      if (user.photo.data) {
        res.set("Content-Type", user.photo.contentType);
        return res.send(user.photo.data);
      }
    });
};

/**this function list all the profiles (PROFILES>SLUG) */
exports.list = (req, res) => {
  User.find()
    .select("name username _id role email updatedAt")
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.status(200).json(data);
    });
};
