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

//done
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

    let review = new Review();
    review.title = title;
    review.body = body;
    review.excerpt = smartTrim(body, 200, " ", " ...");
    review.slug = slugify(title).toLowerCase();
    review.mtitle = `${title} | ${process.env.APP_NAME}`;
    review.mdesc = stripHtml(body.substring(0, 160));
    review.postedBy = req.user._id;
    //tags
    let arrayOfTags = tags && tags.split(",");

    if (files.photo) {
      if (files.photo.size > 1000000) {
        return res.status(400).json({
          error: "Image should be less than 1mb in size",
        });
      }

      review.photo.data = fs.readFileSync(files.photo.path);
      review.photo.contentType = files.photo.type;
    } else {
      return res.status(400).json({
        error: "Featured photo cannot be empty",
      });
    }

    review.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }

      Review.findByIdAndUpdate(
        result._id,
        { $push: { tags: arrayOfTags } },
        { new: true }
      ).exec((err, result) => {
        if (err) {
          return res.status(400).json({
            error: errorHandler(err),
          });
        } else {
          res.json(result);
        }
      }); //update
    }); //save
  });
};

/**{done}this function is used to fetch all public review posts (reviews>Index,reviews>slug) */
exports.listPublic = (req, res) => {
  const flag = 1;
  Review.find({ flag })
    .populate("postedBy", "username")
    .select("title slug postedBy updatedAt flag")
    .sort({ updatedAt: -1 })
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      if (!data) {
        return res.status(404).json({
          error: "no list reviews data found",
        });
      }
      res.status(200).json(data);
    });
};

/**{done}this function fetch the first latest review (Index page) */
exports.listPublicLatestReview = (req, res) => {
  const flag = 1;
  Review.findOne({ flag })
    .populate("postedBy", "username")
    .select("title slug postedBy updatedAt")
    .sort({ updatedAt: -1 })
    .limit(1)
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      if (!data) {
        return res.status(404).json({
          error: "no latest reviews data found",
        });
      }
      res.status(200).json(data);
    });
};

/**{done}this function fetch the second latest review (Index page)  */
exports.listPublicSecondLatestReview = (req, res) => {
  const flag = 1;
  Review.findOne({ flag })
    .populate("postedBy", "username")
    .select("title slug postedBy updatedAt")
    .sort({ updatedAt: -1 })
    .skip(1)
    .limit(1)
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      if (!data) {
        return res.status(404).json({
          error: "no second latest reviews data found",
        });
      }
      res.status(200).json(data);
    });
};

/**{done}this function fetch the eight'th latest review (Index page)  */
exports.listPublicEighthLatestReview = (req, res) => {
  const flag = 1;
  Review.findOne({ flag })
    .populate("postedBy", "username")
    .select("title slug postedBy updatedAt")
    .sort({ updatedAt: -1 })
    .skip(7)
    .limit(1)
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      if (!data) {
        return res.status(400).json({
          error: "no section eight reviews data found",
        });
      }
      res.status(200).json(data);
    });
};

/**{done}this function fetch 5 latest reviews from 8th one onward responsible for left part (Index page) */
exports.listLimitedReviewsSectionOne = (req, res) => {
  const flag = 1;
  const limit = 5;
  Review.find({ flag })
    .populate("postedBy", "username")
    .select("slug title updatedAt postedBy")
    .skip(1)
    .sort({ updatedAt: -1 })
    .skip(8)
    .limit(limit)
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      if (!data) {
        return res.status(404).json({
          error: "no section one reviews data found",
        });
      }
      res.status(200).json(data);
    });
};

/**{done}this function fetch 5 latest reviews from 14th one onward responsible for right part (Index page) */
exports.listLimitedReviewsSectionTwo = (req, res) => {
  const flag = 1;
  const limit = 5;
  Review.find({ flag })
    .populate("postedBy", "username")
    .select("slug title updatedAt postedBy")
    .skip(1)
    .sort({ updatedAt: -1 })
    .skip(13)
    .limit(limit)
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      if (!data) {
        return res.status(404).json({
          error: "no second senction reviews data found",
        });
      }
      res.status(200).json(data);
    });
};

/**{done}completed this function is used to list popular latest reviews for home pages  (Index page) */
exports.listForHomePage = (req, res) => {
  const flag = 1;
  const limit = 5;
  Review.find({ flag })
    .populate("postedBy", "username")
    .select("slug title updatedAt postedBy")
    .skip(2)
    .sort({ updatedAt: -1 })
    .limit(limit)
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      if (!data) {
        return res.status(404).json({
          error: "no reviews for home page data found",
        });
      }
      res.status(200).json(data);
    });
};

/**{done}completed this function is used to list popular latest reviews for  mobile and news pages (Index page,news>Index,phones>INDEX)  */
exports.listForNewsMobile = (req, res) => {
  const flag = 1;
  const limit = 5;
  Review.find({ flag })
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
      if (!data) {
        return res.status(404).json({
          error: "no reviews data found",
        });
      }
      res.status(200).json(data);
    });
};

/**{done}completed this function is used to list top news stories  (reviews>slug) */
exports.listPublicTopStories = (req, res) => {
  const flag = 1;
  const limit = 50;
  //console.log("id", _id);
  News.find({ flag: flag })
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
          error: "no top stories data found",
        });
      }
      res.status(200).json(blogs);
    });
};

exports.listPrivate = (req, res) => {
  const flag = 0;
  Review.find({ flag })
    .populate("tags", "_id name slug")
    .populate("postedBy", "_id name username")
    .select("_id title slug excerpt tags postedBy createdAt updatedAt flag")
    .sort({ updatedAt: -1 })
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

  Review.find({ postedBy: _id, flag: flag })
    .populate("tags", "_id name slug")
    .populate("postedBy", "_id name username")
    .select("_id title slug excerpt tags postedBy createdAt updatedAt flag")
    .sort({ updatedAt: -1 })
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }

      res.status(200).json(data);
    });
};

exports.listForModeratorPublic = (req, res) => {
  const flag = 1;
  let _id = req.params.id;

  Review.find({ postedBy: _id, flag: flag })
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

/**{done}completed this function is used to list related reviews  (reviews>slug) */
exports.listRelated = (req, res) => {
  let limit = 5;
  const { _id, tags } = req.body.blog.data;
  const flag = 1;
  Review.find({ _id: { $ne: _id }, tags: { $in: tags }, flag: flag })
    .limit(limit)
    .populate("postedBy", "username")
    .select("title slug postedBy updatedAt")
    .sort({ updatedAt: -1 })
    .exec((err, blogs) => {
      if (err) {
        return res.status(400).json({
          error: "Error code 400",
        });
      }
      if (!blogs) {
        return res.status(404).json({
          error: " related reviews Blogs not found",
        });
      }
      res.status(200).json(blogs);
    });
};

exports.listRelatedNews = (req, res) => {
  let limit = 5;
  const { tags } = req.body.blog;

  News.find({ tags: { $in: tags } })
    .limit(limit)
    .populate("postedBy", "_id name username")
    .select("title slug postedBy createdAt updatedAt")
    .sort({ updatedAt: -1 })
    .exec((err, blogs) => {
      if (err) {
        return res.status(400).json({
          error: " related reviews Blogs not found",
        });
      }
      res.json(blogs);
    });
};

/**{done}completed this function is used to list related mobiles  (reviews>slug) */
exports.listRelatedMobiles = (req, res) => {
  let limit = 10;
  const { tags } = req.body.blog.data;
  const flag = 1;

  Mobile.find({ tags: { $in: tags }, flag: flag })
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
          error: "no related mobile data found",
        });
      }
      res.status(200).json(blogs);
    });
};

exports.photo = (req, res) => {
  const slug = req.params.slug;

  Review.findOne({ slug })
    .select("photo")
    .exec((err, reviewPhoto) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      } else if (!reviewPhoto) {
        return res.status(400).json({
          error: "reviewPhoto not found",
        });
      }

      if (reviewPhoto.photo.data) {
        res.set("Content-Type", reviewPhoto.photo.contentType);
        return res.send(reviewPhoto.photo.data);
      }
    });
};

/**{done}this function is used to display single review (reviews>slug) */
exports.read = (req, res) => {
  const slug = req.params.slug.toLowerCase();
  const flag = 1;
  Review.findOne({ slug, flag })
    .populate("tags", "_id name slug")
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

/**{done}this function is used to display single review admin) */
exports.readCreators = (req, res) => {
  const slug = req.params.slug.toLowerCase();
  Review.findOne({ slug })
    .populate("tags", "_id name slug")
    .populate("postedBy", "username")
    .select("_id title body slug mtitle mdesc tags postedBy updatedAt flag")
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      if (!data) {
        return res.status(404).json({ error: "no reviews data found" });
      }
      //console.log(data);

      res.status(200).json(data);
    });
};

exports.remove = (req, res) => {
  const slug = req.params.slug.toLowerCase();
  Review.findOneAndRemove({ slug }).exec((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }

    res.status(200).json({
      message: "Review deleted successfully",
    });
  });
};

exports.update = (req, res) => {
  const slug = req.params.slug.toLowerCase();

  Review.findOne({ slug }).exec((err, oldBlog) => {
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

  Review.findOne({ slug }).exec((err, post) => {
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
      res.status(200).json(response);
    });
  });
};

exports.unPublishPost = (req, res) => {
  //console.log('log : ', req.params.slug);

  const slug = req.params.slug.toLowerCase();

  Review.findOne({ slug }).exec((err, post) => {
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
    Review.find(
      {
        $or: [{ title: { $regex: search, $options: "i" } }],
      },
      (err, blogs) => {
        if (err) {
          return res.status(400).json({
            error: errorHandler(err),
          });
        }

        res.json(blogs);
      }
    ).select("-photo -body");
  }
};

//{done}done (SEARCH)
exports.listSearchUser = (req, res) => {
  //console.log(req.query);
  const { search } = req.query;

  if (search) {
    Review.find({
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
        if (!blogs) {
          return res.status(404).json({
            error: "No results",
          });
        }
        //console.log("from news : ", blogs);
        res.status(200).json(blogs);
      });
  }
};

// /**completed  */
// exports.listSearchUser = (req, res) => {
//   //console.log(req.query);
//   const { search } = req.query;

//   if (search) {
//     Review.find(
//       {
//         $or: [{ title: { $regex: search, $options: "i" }, flag: 1 }],
//       },
//       (err, blogs) => {
//         if (err) {
//           return res.status(400).json({
//             error: errorHandler(err),
//           });
//         }
//         res.json(blogs);
//       }
//     ).select("-photo -body");
//   }
// };

exports.listSearchModerator = (req, res) => {
  // console.log(req.query);
  const { search } = req.query;

  if (search) {
    Review.find(
      {
        $or: [{ title: { $regex: search, $options: "i" } }],
      },
      (err, blogs) => {
        if (err) {
          return res.status(400).json({
            error: errorHandler(err),
          });
        }
        res.json(blogs);
      }
    ).select("-photo -body");
  }
};
