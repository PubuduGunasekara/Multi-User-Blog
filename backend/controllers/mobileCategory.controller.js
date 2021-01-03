const MobileCategory = require("../models/mobileCategory.model");
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

    const { name, body } = fields;

    if (!name || !name.length) {
      return res.status(400).json({
        error: "Name is required",
      });
    }
    if (name.length > 50) {
      return res.status(400).json({
        error: "Name is too long",
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

    let mCategory = new MobileCategory();
    mCategory.name = name;
    mCategory.body = body;
    mCategory.excerpt = smartTrim(body, 200, " ", " ...");
    mCategory.slug = slugify(name).toLowerCase();
    mCategory.mtitle = `All ${name} Phones| ${process.env.APP_NAME}`;
    mCategory.mdesc = stripHtml(body.substring(0, 160));
    mCategory.postedBy = req.user._id;

    if (files.photo) {
      if (files.photo.size > 1000000) {
        return res.status(400).json({
          error: "Image should be less than 1mb in size",
        });
      }

      mCategory.photo.data = fs.readFileSync(files.photo.path);
      mCategory.photo.contentType = files.photo.type;
    } else {
      return res.status(400).json({
        error: "Featured photo cannot be empty",
      });
    }

    mCategory.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      } else {
        res.json(result);
      }
    }); //save
  });
};

/**{done}completed! this function is used to read single mobile category data(phone>brands>slug)*/
exports.read = (req, res) => {
  let slug = req.params.slug.toLowerCase();
  MobileCategory.findOne({ slug: slug })
    .select("_id name mtitle mdesc")
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      if (!data) {
        return res.status(404).json({
          data: null,
        });
      }
      // console.log(err);
      // console.log(data);
      res.status(200).json({ data: data });
    });
};

/**{done}completed! this function is used to read single mobile category data for admin panel*/
exports.readForCreators = (req, res) => {
  let slug = req.params.slug.toLowerCase();
  MobileCategory.findOne({ slug: slug })
    .select("_id body name")
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      if (!data) {
        return res.status(404).json({
          error: "no mobile category data found",
        });
      }
      // console.log(err);
      // console.log(data);
      res.status(200).json(data);
    });
};

/**{done}completed! this function is used in admin panel > create mobile category page  and user side all mobile brands page (phones>INDEX,phone>brands>slug)*/
exports.list = (req, res) => {
  MobileCategory.find({})
    .select("name slug")
    .sort({ name: 1 })
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      if (!data) {
        return res.status(404).json({
          error: "no mobile category list data found",
        });
      }
      res.status(200).json(data);
    });
};

exports.listForHomePage = (req, res) => {
  MobileCategory.find({})
    .select("_id name slug createdAt")
    .sort({ name: 1 })
    .limit(10)
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      if (!data) {
        return res.status(400).json({
          error: "no data found",
        });
      }
      res.status(200).json(data);
    });
};

exports.photo = (req, res) => {
  const slug = req.params.slug;

  MobileCategory.findOne({ slug })
    .select("photo")
    .exec((err, reviewPhoto) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      } else if (!reviewPhoto) {
        return res.status(400).json({
          error: "Featured photo not found",
        });
      }

      if (reviewPhoto.photo.data) {
        res.set("Content-Type", reviewPhoto.photo.contentType);
        return res.send(reviewPhoto.photo.data);
      }
    });
};

exports.remove = (req, res) => {
  const slug = req.params.slug.toLowerCase();
  MobileCategory.findOneAndRemove({ slug }).exec((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }

    res.status(200).json({
      message: "Mobile Category deleted successfully",
    });
  });
};

exports.update = (req, res) => {
  const slug = req.params.slug.toLowerCase();

  MobileCategory.findOne({ slug }).exec((err, oldBlog) => {
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

      const { body, name } = fields;

      if (!name || !name.length) {
        return res.status(400).json({
          error: "name is required",
        });
      }
      if (name.length > 60) {
        return res.status(400).json({
          error: "name is too long",
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

      if (body) {
        oldBlog.excerpt = smartTrim(body, 200, " ", " ...");
        oldBlog.mdesc = stripHtml(body.substring(0, 160));
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
