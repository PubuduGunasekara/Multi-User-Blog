const Review = require("../models/review.model");
const Mobile = require("../models/mobile.model");
const News = require("../models/news.model");
const User = require("../models/user.model");
const Tag = require("../models/tag.model");
const formidable = require("formidable");
const slugify = require("slugify");
const stripHtml = require("string-strip-html");
const _ = require("lodash");
const { errorHandler } = require("../helpers/dbErrorHandler");
const fs = require("fs");
const { smartTrim } = require("../helpers/blog");

exports.create = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Image could not upload",
      });
    }

    const { title, body, tags } = fields;

    if (!title || !title.length) {
      return res.status(400).json({
        error: "Title is required",
      });
    }
    if (title.length > 160) {
      return res.status(400).json({
        error: "Title is too long",
      });
    }

    if (!body || !body.length) {
      return res.status(400).json({
        error: "Body content is required",
      });
    }

    if (body.length < 200) {
      return res.status(400).json({
        error: "Content is too short",
      });
    }

    if (!tags || tags.length === 0) {
      return res.status(400).json({
        error: "At least one tag is required",
      });
    }

    let news = new News();
    news.title = title;
    news.body = body;
    news.excerpt = smartTrim(body, 200, " ", " ...");
    news.slug = slugify(title).toLowerCase();
    news.mtitle = `${title} | ${process.env.APP_NAME}`;
    news.mdesc = stripHtml(body.substring(0, 160));
    news.postedBy = req.user._id;
    //tags
    let arrayOfTags = tags && tags.split(",");

    if (files.photo) {
      if (files.photo.size > 1000000) {
        return res.status(400).json({
          error: "Image should be less than 1mb in size",
        });
      }

      news.photo.data = fs.readFileSync(files.photo.path);
      news.photo.contentType = files.photo.type;
    } else {
      return res.status(400).json({
        error: "Featured photo cannot be empty",
      });
    }

    news.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }

      News.findByIdAndUpdate(
        result._id,
        { $push: { tags: arrayOfTags } },
        { new: true }
      ).exec((err, result) => {
        if (err) {
          return res.status(400).json({
            error: errorHandler(err),
          });
        } else {
          res.status(200).json(result);
        }
      }); //update
    }); //save
  });
};

/**used to fetch all public news to the news page (news>Index,news>slug) */
exports.listPublic = (req, res) => {
  const flag = 1;
  News.find({ flag })
    .populate("postedBy", "username")
    .select("title slug excerpt postedBy updatedAt flag")
    .sort({ updatedAt: -1 })
    .exec((err, data) => {
      if (err) {
        res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.status(200).json(data);
    });
};

/**used to fetch first 10 latest news for home page from 2nd one onward (Index page)*/
exports.listPublicLimitFirstSection = (req, res) => {
  const flag = 1;
  News.find({ flag })
    .populate("postedBy", "username")
    .select("title slug excerpt postedBy updatedAt")
    .sort({ updatedAt: -1 })
    .skip(2)
    .limit(10)
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.status(200).json(data);
    });
};

/**used to fetch second 10 latest news for home page from 13 th one onward (Index page)*/
exports.listPublicLimitSecondSection = (req, res) => {
  const flag = 1;
  News.find({ flag })
    .populate("postedBy", "username")
    .select("title slug excerpt postedBy updatedAt")
    .sort({ updatedAt: -1 })
    .skip(12)
    .limit(10)
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.status(200).json(data);
    });
};

/**used to fetch final 10 latest news for home page from 23 th one onward also used for load more functionality (Index page)*/
exports.listPublicLimitFinalSection = (req, res) => {
  let limit = parseInt(req.body.limit);
  let skip = parseInt(req.body.skip);
  const flag = 1;
  News.find({ flag })
    .populate("postedBy", "username")
    .select("title slug excerpt postedBy updatedAt")
    .sort({ updatedAt: -1 })
    .skip(skip)
    .limit(limit)
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.status(200).json(data);
    });
};

/**used to fetch latest news (Index page)*/
exports.listPublicLatestNews = (req, res) => {
  const flag = 1;
  News.findOne({ flag })
    .populate("postedBy", "username")
    .select("title slug excerpt postedBy updatedAt")
    .sort({ updatedAt: -1 })
    .limit(1)
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.status(200).json(data);
    });
};

/**used to fetch second latest news(Index page) */
exports.listPublicSecondLatestNews = (req, res) => {
  const flag = 1;
  News.findOne({ flag })
    .populate("postedBy", "username")
    .select("title slug excerpt postedBy updatedAt")
    .sort({ updatedAt: -1 })
    .skip(1)
    .limit(1)
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.status(200).json(data);
    });
};

/**completed this function is used to list all top staries (news>slug) */
exports.listPublicTopStories = (req, res) => {
  const flag = 1;
  const limit = 50;
  const { _id } = req.body.blog.data;
  //console.log("id", _id);
  News.find({ _id: { $ne: _id }, flag: flag })
    .limit(limit)
    .populate("postedBy", "username")
    .select("title slug excerpt postedBy updatedAt")
    .sort({ updatedAt: -1 })
    .exec((err, blogs) => {
      if (err) {
        return res.status(400).json({
          error: "Error code 400",
        });
      }
      if (!blogs) {
        return res.status(404).json({
          error: "no data found",
        });
      }
      res.status(200).json(blogs);
    });
};

exports.listPrivate = (req, res) => {
  const flag = 0;
  News.find({ flag })
    .populate("tags", "_id name slug")
    .populate("postedBy", "_id name username")
    .select("_id title slug excerpt tags postedBy createdAt updatedAt flag")
    .sort({ updatedAt: -1 })
    .exec((err, data) => {
      if (err) {
        return res.json({
          error: errorHandler(err),
        });
      }
      res.json(data);
    });
};

/**completed this function is used to list popular news for mobile and review pages (reviews>index,phones>Index) */
exports.listForMobileReviews = (req, res) => {
  const flag = 1;
  const limit = 5;
  News.find({ flag })
    .populate("postedBy", "username")
    .select("slug title updatedAt postedBy")
    .sort({ updatedAt: -1 })
    .limit(limit)
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }

      res.status(200).json(data);
    });
};

exports.listForModeratorPrivate = (req, res) => {
  const flag = 0;
  let _id = req.params.id;

  News.find({ postedBy: _id, flag: flag })
    .populate("tags", "_id name slug")
    .populate("postedBy", "_id name username")
    .select("_id title slug excerpt tags postedBy createdAt updatedAt flag")
    .sort({ updatedAt: -1 })
    .exec((err, data) => {
      if (err) {
        return res.json({
          error: errorHandler(err),
        });
      }

      res.json(data);
    });
};

exports.listForModeratorPublic = (req, res) => {
  const flag = 1;
  let _id = req.params.id;

  News.find({ postedBy: _id, flag: flag })
    .populate("tags", "_id name slug")
    .populate("postedBy", "_id name username")
    .select("_id title slug excerpt tags postedBy createdAt updatedAt flag")
    .sort({ updatedAt: -1 })
    .exec((err, data) => {
      if (err) {
        return res.json({
          error: errorHandler(err),
        });
      }

      res.json(data);
    });
};

exports.listRelated = (req, res) => {
  let limit = 5;
  let flag = 1;
  const { _id, tags } = req.body.blog;

  News.find({ _id: { $ne: _id }, tags: { $in: tags }, flag: flag })
    .limit(limit)
    .populate("postedBy", "_id name username profile")
    .populate("tags", "_id name")
    .select("title tags slug excerpt postedBy createdAt updatedAt")
    .sort({ updatedAt: -1 })
    .exec((err, blogs) => {
      if (err) {
        return res.status(400).json({
          error: "Blogs not found",
        });
      }
      res.json(blogs);
    });
};

/**completed this function is used to list related reviews (news>slug) */
exports.listRelatedReviews = (req, res) => {
  let limit = 5;
  const { tags } = req.body.blog.data;

  Review.find({ tags: { $in: tags } })
    .limit(limit)
    .populate("postedBy", "username")
    .select("title slug postedBy updatedAt")
    .sort({ updatedAt: -1 })
    .exec((err, blogs) => {
      if (err) {
        return res.status(400).json({
          error: "error code 400",
        });
      }
      if (!blogs) {
        return res.status(404).json({
          error: "no data found",
        });
      }
      res.status(200).json(blogs);
    });
};

/**completed this function is used to list related reviews (news>slug) */
exports.listRelatedMobiles = (req, res) => {
  let limit = 10;
  const { tags } = req.body.blog.data;

  Mobile.find({ tags: { $in: tags } })
    .limit(limit)
    .select("title slug")
    .sort({ updatedAt: -1 })
    .exec((err, blogs) => {
      if (err) {
        return res.status(400).json({
          error: "Error code 400",
        });
      }
      if (!blogs) {
        return res.status(404).json({
          error: "no data found",
        });
      }
      res.status(200).json(blogs);
    });
};

exports.photo = (req, res) => {
  const slug = req.params.slug;

  News.findOne({ slug })
    .select("photo")
    .exec((err, newsPhoto) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      } else if (!newsPhoto) {
        return res.status(400).json({
          error: "newsPhoto not found",
        });
      }

      if (newsPhoto.photo.data) {
        res.set("Content-Type", newsPhoto.photo.contentType);
        return res.send(newsPhoto.photo.data);
      }
    });
};

/**completed this function is used to read the news (news > slug) */
exports.read = (req, res) => {
  const slug = req.params.slug.toLowerCase();
  News.findOne({ slug })
    .populate("tags", "name slug")
    .populate("postedBy", "username")
    .select("_id title body slug mtitle mdesc tags postedBy updatedAt flag")
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      if (!data) {
        return res.status(404).json({ data: "" });
      }
      //console.log(data);

      res.status(200).json({ data: data });
    });
};

exports.remove = (req, res) => {
  const slug = req.params.slug.toLowerCase();
  News.findOneAndRemove({ slug }).exec((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }

    res.status(200).json({
      message: "News deleted successfully",
    });
  });
};

exports.update = (req, res) => {
  const slug = req.params.slug.toLowerCase();

  News.findOne({ slug }).exec((err, oldBlog) => {
    if (err) {
      return res.json({
        error: errorHandler(err),
      });
    }

    let form = new formidable.IncomingForm();
    form.keepExtensions = true;

    form.parse(req, (err, fields, files) => {
      if (err) {
        return res.status(400).json({
          error: "Image could not upload",
        });
      }

      let slugBeforeMerge = oldBlog.slug;
      oldBlog = _.merge(oldBlog, fields);
      oldBlog.slug = slugBeforeMerge;

      const { body, tags, title } = fields;

      if (!title || !title.length) {
        return res.status(400).json({
          error: "Title is required",
        });
      }
      if (title.length > 160) {
        return res.status(400).json({
          error: "Title is too long",
        });
      }

      if (!body || !body.length) {
        return res.status(400).json({
          error: "Body content is required",
        });
      }

      if (body.length < 200) {
        return res.status(400).json({
          error: "Content is too short",
        });
      }

      if (!tags || tags.length === 0) {
        return res.status(400).json({
          error: "At least one tag is required",
        });
      }

      if (body) {
        oldBlog.excerpt = smartTrim(body, 200, " ", " ...");
        oldBlog.mdesc = stripHtml(body.substring(0, 160));
      }

      if (tags) {
        oldBlog.tags = tags.split(",");
      }

      if (files.photo) {
        if (files.photo.size > 1000000) {
          return res.status(400).json({
            error: "Image should be less than 1mb in size",
          });
        }
        oldBlog.photo.data = fs.readFileSync(files.photo.path);
        oldBlog.photo.contentType = files.photo.type;
      }
      oldBlog.save((err, result) => {
        if (err) {
          return res.status(400).json({
            error: errorHandler(err),
          });
        }
        //result.photo = undefined
        res.json(result);
      });
    });
  });
};

exports.approvePost = (req, res) => {
  //console.log('log : ', req.params.slug);

  const slug = req.params.slug.toLowerCase();

  News.findOne({ slug }).exec((err, post) => {
    if (err) {
      return res.json({
        error: errorHandler(err),
      });
    }
    if (!post) {
      return res.json({
        error: "Cannot find the post.",
      });
    }

    post.flag = 1;

    post.save((err, response) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.json(response);
    });
  });
};

exports.unPublishPost = (req, res) => {
  //console.log('log : ', req.params.slug);

  const slug = req.params.slug.toLowerCase();

  News.findOne({ slug }).exec((err, post) => {
    if (err) {
      return res.json({
        error: errorHandler(err),
      });
    }
    if (!post) {
      return res.json({
        error: "Cannot find the post.",
      });
    }

    post.flag = 0;

    post.save((err, response) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.json(response);
    });
  });
};

exports.listSearchAdmin = (req, res) => {
  console.log(req.query);
  const { search } = req.query;

  if (search) {
    News.find(
      {
        $or: [{ title: { $regex: search, $options: "i" } }],
      },
      (err, blogs) => {
        if (err) {
          return res.status(400).json({
            error: errorHandler(err),
          });
        }
        console.log("from news : ", blogs);
        res.json(blogs);
      }
    ).select("-photo -body");
  }
};

//done (SEARCH)
exports.listSearchUser = (req, res) => {
  //console.log(req.query);
  const { search } = req.query;

  if (search) {
    News.find({
      $or: [{ title: { $regex: search, $options: "i" }, flag: 1 }],
    })
      .populate("postedBy", "name")
      .select("postedBy title updatedAt slug")
      .sort({ updatedAt: -1 })
      .exec((err, blogs) => {
        if (err) {
          return res.status(400).json({
            error: errorHandler(err),
          });
        }
        //console.log("from news : ", blogs);
        res.status(200).json(blogs);
      });
  }
};

/**completed */
// exports.listSearchUser = (req, res) => {
//   //console.log(req.query);
//   const { search } = req.query;

//   if (search) {
//     News.find(
//       {
//         $or: [{ title: { $regex: search, $options: "i" }, flag: 1 }],
//       },
//       (err, blogs) => {
//         if (err) {
//           return res.status(400).json({
//             error: errorHandler(err),
//           });
//         }
//         //console.log("from news : ", blogs);
//         res.json(blogs);
//       }
//     ).select("-photo -body");
//   }
// };

exports.listSearchModerator = (req, res) => {
  console.log("query ", req.query);
  const { search } = req.query;

  if (search) {
    News.find(
      {
        $or: [{ title: { $regex: search, $options: "i" } }],
      },
      (err, blogs) => {
        if (err) {
          return res.status(400).json({
            error: errorHandler(err),
          });
        }
        console.log(blogs);
        res.json(blogs);
      }
    ).select("-photo -body");
  }
};
