const Tag = require("../models/tag.model");
const Review = require("../models/review.model");
const Mobile = require("../models/mobile.model");
const News = require("../models/news.model");
const slugify = require("slugify");
const { errorHandler } = require("../helpers/dbErrorHandler");

exports.create = (req, res) => {
  const { name } = req.body;
  let slug = slugify(name).toLowerCase();

  let tag = new Tag({ name, slug });

  tag.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json(data);
  });
};

/**
 * COMPLETED!
 */
/**{done}this method fetch all the tags (Tag) */
exports.list = (req, res) => {
  Tag.find()
    .select("slug")
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      if (!data) {
        return res.status(404).json({
          error: "no tags",
        });
      }

      res.status(200).json(data);
    });
};
/**{done}this function displays the single tag details with news mobiles and reviews */
exports.read = (req, res) => {
  const slug = req.params.slug.toLowerCase();
  Tag.findOne({ slug })
    .select("name slug")
    .exec((err, tag) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      News.find({ tags: tag })
        .populate("postedBy", "username")
        .sort({ updatedAt: -1 })
        .select("title slug postedBy updatedAt")
        .exec((err, newsData) => {
          if (err) {
            return res.status(400).json({
              error: errorHandler(err),
            });
          }
          if (newsData) {
            Review.find({ tags: tag })
              .populate("postedBy", "username")
              .sort({ updatedAt: -1 })
              .select("title slug postedBy updatedAt")
              .exec((err, reviewData) => {
                if (err) {
                  return res.status(400).json({
                    error: errorHandler(err),
                  });
                }
                if (reviewData) {
                  Mobile.find({ tags: tag })
                    .populate("postedBy", "name")
                    .sort({ updatedAt: -1 })
                    .select("title slug")
                    .exec((err, mobileData) => {
                      if (err) {
                        return res.status(400).json({
                          error: errorHandler(err),
                        });
                      }
                      res.status(200).json({
                        data: {
                          tag: tag,
                          news: newsData,
                          reviews: reviewData,
                          mobiles: mobileData,
                        },
                      });
                    });
                } else {
                  res.status(200).json({
                    data: {
                      tag: tag,
                      news: newsData,
                      reviews: reviewData,
                      mobiles: mobileData,
                    },
                  });
                }
              });
          } else {
            res.status(200).json({
              data: {
                tag: tag,
                news: newsData,
                reviews: reviewData,
                mobiles: mobileData,
              },
            });
          }
        });
    });
};

exports.remove = (req, res) => {
  const slug = req.params.slug.toLowerCase();
  Tag.findOneAndRemove({ slug }).exec((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }

    res.status(200).json({
      message: "Tag deleted successfully",
    });
  });
};
