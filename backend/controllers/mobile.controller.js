const Mobile = require("../models/mobile.model");
const News = require("../models/news.model");
const Reviews = require("../models/review.model");
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

    const {
      title,
      brand,
      body,
      tags,
      fdDisplay,
      fdBattery,
      fdStorage,
      fdCamera,
      fdOs,
      fdChipset,
      displayType,
      displaySize,
      displayResolution,
      displayProtection,
      conWlan,
      conBluetooth,
      conGps,
      conNfc,
      conRadio,
      conUsb,
      conSensors,
      networkTechnology,
      network2gband,
      network3gband,
      network4gband,
      network5gband,
      networkSpeed,
      networkSimType,
      mainCameraDetails,
      mainCameraFeatures,
      mainCameraVideo,
      selfyCameraDetails,
      selfyCameraFeatures,
      selfyCameraVideo,
      hardwareChipset,
      hardwareProcessor,
      hardwareGpu,
      hardwareRam,
      hardwareStorage,
      softwareOs,
      launchAnnouced,
      launchAvailability,
      soundHeadphone,
      soundFeatures,
      batteryDetails,
      batteryFeatures,
      bodyWeight,
      bodyDimension,
      bodyBuild,
      bodyButtons,
      bodyResistence,
      productModels,
      productPrice,
      productColors,
    } = fields;

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

    if (!brand) {
      return res.status(400).json({
        error: "Brand cannot be empty",
      });
    }

    if (!body || !body.length) {
      return res.status(400).json({
        error: "Description content is required",
      });
    }

    if (body.length > 200) {
      return res.status(400).json({
        error: "descrption Content is too large",
      });
    }

    if (!tags || tags.length === 0) {
      return res.status(400).json({
        error: "At least one tag is required",
      });
    }
    if (!fdDisplay || !fdDisplay.length || fdDisplay.length > 150) {
      return res.status(400).json({
        error: "Featured-data display is required or too large",
      });
    }
    if (!fdBattery || !fdBattery.length || fdBattery.length > 150) {
      return res.status(400).json({
        error: "Featured-data Battery is required or too large",
      });
    }
    if (!fdStorage || !fdStorage.length || fdStorage.length > 150) {
      return res.status(400).json({
        error: "Featured-data storage is required or too large",
      });
    }
    if (!fdCamera || !fdCamera.length || fdCamera.length > 150) {
      return res.status(400).json({
        error: "Featured-data camera is required or too large",
      });
    }
    if (!fdOs || !fdOs.length || fdOs.length > 150) {
      return res.status(400).json({
        error: "Featured-data OS is required or too large",
      });
    }
    if (!fdChipset || !fdChipset.length || fdChipset.length > 150) {
      return res.status(400).json({
        error: "Featured-data chipset is required or too large",
      });
    }
    if (!displayType || !displayType.length || displayType.length > 150) {
      return res.status(400).json({
        error: "display type is required or too large",
      });
    }
    if (!displaySize || !displaySize.length || displaySize.length > 150) {
      return res.status(400).json({
        error: "display size is required or too large",
      });
    }
    if (
      !displayResolution ||
      !displayResolution.length ||
      displayResolution.length > 150
    ) {
      return res.status(400).json({
        error: "display resolution is required or too large",
      });
    }
    if (
      !displayProtection ||
      !displayProtection.length ||
      displayProtection.length > 150
    ) {
      return res.status(400).json({
        error: "display protection is required or too large",
      });
    }
    if (!conWlan || !conWlan.length || conWlan.length > 200) {
      return res.status(400).json({
        error: "connection WlAN is required or too large",
      });
    }
    if (!conBluetooth || !conBluetooth.length || conBluetooth.length > 200) {
      return res.status(400).json({
        error: "connection bluetooth is required or too large",
      });
    }
    if (!conGps || !conGps.length || conGps.length > 200) {
      return res.status(400).json({
        error: "connection GPS is required or too large",
      });
    }
    if (!conNfc || !conNfc.length || conNfc.length > 200) {
      return res.status(400).json({
        error: "connection NFC is required or too large",
      });
    }
    if (!conRadio || !conRadio.length || conRadio.length > 200) {
      return res.status(400).json({
        error: "connection radio is required or too large",
      });
    }
    if (!conUsb || !conUsb.length || conUsb.length > 200) {
      return res.status(400).json({
        error: "connection USB is required or too large",
      });
    }
    if (!conSensors || !conSensors.length || conSensors.length > 200) {
      return res.status(400).json({
        error: "connection sensonr is required or too large",
      });
    }
    if (
      !networkTechnology ||
      !networkTechnology.length ||
      networkTechnology.length > 200
    ) {
      return res.status(400).json({
        error: "network technology is required or too large",
      });
    }
    if (!network2gband || !network2gband.length || network2gband.length > 200) {
      return res.status(400).json({
        error: "network 2G band is required or too large",
      });
    }
    if (!network3gband || !network3gband.length || network3gband.length > 200) {
      return res.status(400).json({
        error: "network 3G band is required or too large",
      });
    }
    if (!network4gband || !network4gband.length || network4gband.length > 200) {
      return res.status(400).json({
        error: "network 4G band is required or too large",
      });
    }
    if (!network5gband || !network5gband.length || network5gband.length > 200) {
      return res.status(400).json({
        error: "network 5G band is required or too large",
      });
    }
    if (!networkSpeed || !networkSpeed.length || networkSpeed.length > 200) {
      return res.status(400).json({
        error: "network speed is required or too large",
      });
    }
    if (!networkSimType || !networkSimType.length) {
      return res.status(400).json({
        error: "network sim type is required or too large",
      });
    }
    if (
      !mainCameraDetails ||
      !mainCameraDetails.length ||
      mainCameraDetails.length > 200
    ) {
      return res.status(400).json({
        error: "main camera details is required or too large",
      });
    }
    if (
      !mainCameraFeatures ||
      !mainCameraFeatures.length ||
      mainCameraFeatures.length > 200
    ) {
      return res.status(400).json({
        error: "main camera features is required or too large",
      });
    }
    if (
      !mainCameraVideo ||
      !mainCameraVideo.length ||
      mainCameraVideo.length > 200
    ) {
      return res.status(400).json({
        error: "main camera video is required or too large",
      });
    }
    if (
      !selfyCameraDetails ||
      !selfyCameraDetails.length ||
      selfyCameraDetails.length > 200
    ) {
      return res.status(400).json({
        error: "selfy camera details is required or too large",
      });
    }
    if (
      !selfyCameraFeatures ||
      !selfyCameraFeatures.length ||
      selfyCameraFeatures.length > 200
    ) {
      return res.status(400).json({
        error: "selfy camera features is required or too large",
      });
    }
    if (
      !selfyCameraVideo ||
      !selfyCameraVideo.length ||
      selfyCameraVideo.length > 200
    ) {
      return res.status(400).json({
        error: "selfy camera video is required or too large",
      });
    }
    if (
      !hardwareChipset ||
      !hardwareChipset.length ||
      hardwareChipset.length > 200
    ) {
      return res.status(400).json({
        error: "hardware chipset is required or too large",
      });
    }
    if (
      !hardwareProcessor ||
      !hardwareProcessor.length ||
      hardwareProcessor.length > 200
    ) {
      return res.status(400).json({
        error: "hardware process is required or too large",
      });
    }
    if (!hardwareGpu || !hardwareGpu.length || hardwareGpu.length > 200) {
      return res.status(400).json({
        error: "hardware GPU is required or too large",
      });
    }
    if (!hardwareRam || !hardwareRam.length || hardwareRam.length > 200) {
      return res.status(400).json({
        error: "hardware Ram is required or too large",
      });
    }
    if (
      !hardwareStorage ||
      !hardwareStorage.length ||
      hardwareStorage.length > 200
    ) {
      return res.status(400).json({
        error: "hardware storage is required or too large",
      });
    }
    if (!softwareOs || !softwareOs.length || softwareOs.length > 200) {
      return res.status(400).json({
        error: "software OS is required or too large",
      });
    }
    if (
      !launchAnnouced ||
      !launchAnnouced.length ||
      launchAnnouced.length > 200
    ) {
      return res.status(400).json({
        error: "launch announced is required or too large",
      });
    }
    if (
      !launchAvailability ||
      !launchAvailability.length ||
      launchAvailability.length > 200
    ) {
      return res.status(400).json({
        error: "launch availability is required or too large",
      });
    }
    if (
      !soundHeadphone ||
      !soundHeadphone.length ||
      soundHeadphone.length > 200
    ) {
      return res.status(400).json({
        error: "sound headphone is required or too large",
      });
    }
    if (!soundFeatures || !soundFeatures.length || soundFeatures.length > 200) {
      return res.status(400).json({
        error: "sound features is required or too large",
      });
    }
    if (
      !batteryDetails ||
      !batteryDetails.length ||
      batteryDetails.length > 200
    ) {
      return res.status(400).json({
        error: "battery details is required or too large",
      });
    }
    if (
      !batteryFeatures ||
      !batteryFeatures.length ||
      batteryFeatures.length > 200
    ) {
      return res.status(400).json({
        error: "battery fetures is required or too large",
      });
    }
    if (!bodyWeight || !bodyWeight.length || bodyWeight.length > 200) {
      return res.status(400).json({
        error: "battery weight is required or too large",
      });
    }
    if (!bodyDimension || !bodyDimension.length || bodyDimension.length > 200) {
      return res.status(400).json({
        error: "body dimension is required or too large",
      });
    }
    if (!bodyBuild || !bodyBuild.length || bodyBuild.length > 200) {
      return res.status(400).json({
        error: "body build is required or too large",
      });
    }
    if (!bodyButtons || !bodyButtons.length || bodyButtons.length > 200) {
      return res.status(400).json({
        error: "body Buttons is required or too large",
      });
    }
    if (
      !bodyResistence ||
      !bodyResistence.length ||
      bodyResistence.length > 200
    ) {
      return res.status(400).json({
        error: "body Resistance is required or too large",
      });
    }
    if (!productColors || !productColors.length || productColors.length > 200) {
      return res.status(400).json({
        error: "product Colors is required or too large",
      });
    }
    if (!productModels || !productModels.length || productModels.length > 200) {
      return res.status(400).json({
        error: "product Models is required or too large",
      });
    }
    if (!productPrice || !productPrice.length || productPrice.length > 200) {
      return res.status(400).json({
        error: "product Price is required or too large",
      });
    }

    let mobile = new Mobile();
    mobile.title = title;
    mobile.brand = brand;
    mobile.body = body;
    mobile.fdDisplay = fdDisplay;
    mobile.fdBattery = fdBattery;
    mobile.fdStorage = fdStorage;
    mobile.fdCamera = fdCamera;
    mobile.fdOs = fdOs;
    mobile.fdChipset = fdChipset;
    mobile.displayType = displayType;
    mobile.displaySize = displaySize;
    mobile.displayResolution = displayResolution;
    mobile.displayProtection = displayProtection;
    mobile.conWlan = conWlan;
    mobile.conBluetooth = conBluetooth;
    mobile.conGps = conGps;
    mobile.conNfc = conNfc;
    mobile.conRadio = conRadio;
    mobile.conUsb = conUsb;
    mobile.conSensors = conSensors;
    mobile.networkTechnology = networkTechnology;
    mobile.network2gband = network2gband;
    mobile.network3gband = network3gband;
    mobile.network4gband = network4gband;
    mobile.network5gband = network5gband;
    mobile.networkSpeed = networkSpeed;
    mobile.networkSimType = networkSimType;
    mobile.mainCameraDetails = mainCameraDetails;
    mobile.mainCameraFeatures = mainCameraFeatures;
    mobile.mainCameraVideo = mainCameraVideo;
    mobile.selfyCameraDetails = selfyCameraDetails;
    mobile.selfyCameraFeatures = selfyCameraFeatures;
    mobile.selfyCameraVideo = selfyCameraVideo;
    mobile.hardwareChipset = hardwareChipset;
    mobile.hardwareProcessor = hardwareProcessor;
    mobile.hardwareGpu = hardwareGpu;
    mobile.hardwareRam = hardwareRam;
    mobile.hardwareStorage = hardwareStorage;
    mobile.softwareOs = softwareOs;
    mobile.launchAnnouced = launchAnnouced;
    mobile.launchAvailability = launchAvailability;
    mobile.soundHeadphone = soundHeadphone;
    mobile.soundFeatures = soundFeatures;
    mobile.batteryDetails = batteryDetails;
    mobile.batteryFeatures = batteryFeatures;
    mobile.bodyWeight = bodyWeight;
    mobile.bodyDimension = bodyDimension;
    mobile.bodyBuild = bodyBuild;
    mobile.bodyButtons = bodyButtons;
    mobile.bodyResistence = bodyResistence;
    mobile.productModels = productModels;
    mobile.productPrice = productPrice;
    mobile.productColors = productColors;
    mobile.excerpt = smartTrim(body, 200, " ", " ...");
    mobile.slug = slugify(title).toLowerCase();
    mobile.mtitle = `${title} | ${process.env.APP_NAME}`;
    mobile.mdesc = stripHtml(body.substring(0, 160));
    mobile.postedBy = req.user._id;
    //tags
    let arrayOfTags = tags && tags.split(",");

    if (files.photo) {
      if (files.photo.size > 1000000) {
        return res.status(400).json({
          error: "Image should be less than 1mb in size",
        });
      }

      mobile.photo.data = fs.readFileSync(files.photo.path);
      mobile.photo.contentType = files.photo.type;
    } else {
      return res.status(400).json({
        error: "Featured photo cannot be empty",
      });
    }

    mobile.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }

      Mobile.findByIdAndUpdate(
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

exports.listPrivate = (req, res) => {
  const flag = 0;
  Mobile.find({ flag })
    .populate("tags", "_id name slug")
    .populate("postedBy", "_id name username")
    .select(
      "_id title body fdDisplay fdBattery fdStorage fdCamera fdOs fdChipset displayType displaySize displayResolution displayProtection conWlan conBluetooth conGps conNfc conRadio conUsb conSensors  networkTechnology network2gband network3gband network4gband network5gband networkSpeed networkSimType mainCameraDetails mainCameraFeatures mainCameraVideo selfyCameraDetails selfyCameraFeatures selfyCameraVideo hardwareChipset hardwareProcessor hardwareGpu hardwareRam hardwareStorage softwareOs launchAnnouced launchAvailability soundHeadphone soundFeatures batteryDetails batteryFeatures bodyWeight bodyDimension bodyBuild bodyButtons bodyResistence productModels productPrice productColors slug excerpt tags postedBy createdAt updatedAt flag"
    )
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

exports.listPublic = (req, res) => {
  const flag = 1;
  Mobile.find({ flag })
    .populate("tags", "_id name slug")
    .populate("postedBy", "_id name username")
    .select(
      "_id title body fdDisplay fdBattery fdStorage fdCamera fdOs fdChipset displayType displaySize displayResolution displayProtection conWlan conBluetooth conGps conNfc conRadio conUsb conSensors  networkTechnology network2gband network3gband network4gband network5gband networkSpeed networkSimType mainCameraDetails mainCameraFeatures mainCameraVideo selfyCameraDetails selfyCameraFeatures selfyCameraVideo hardwareChipset hardwareProcessor hardwareGpu hardwareRam hardwareStorage softwareOs launchAnnouced launchAvailability soundHeadphone soundFeatures batteryDetails batteryFeatures bodyWeight bodyDimension bodyBuild bodyButtons bodyResistence productModels productPrice productColors slug excerpt tags postedBy createdAt updatedAt flag"
    )
    .sort({ updatedAt: -1 })
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

/**completed this function is used to list all tye relevent phones of a perticular brand */
exports.listPublicReleventBrands = (req, res) => {
  const flag = 1;
  const brand = req.params.id.toLowerCase();
  Mobile.find({ flag, brand })
    .select("_id title slug updatedAt")
    .sort({ updatedAt: -1 })
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

/**this function is used to fetch latest phone to home page, news and review pages.(home,news>Index,Reviews>Index) */
exports.listForNewsReviews = (req, res) => {
  const flag = 1;
  const limit = 10;
  Mobile.find({ flag })
    .select("title slug updatedAt")
    .sort({ updatedAt: -1 })
    .limit(limit)
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

  Mobile.findOne({ slug })
    .select("photo")
    .exec((err, mobilePhoto) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      } else if (!mobilePhoto) {
        return res.status(400).json({
          error: "mobilePhoto not found",
        });
      }

      if (mobilePhoto.photo.data) {
        res.set("Content-Type", mobilePhoto.photo.contentType);
        return res.send(mobilePhoto.photo.data);
      }
    });
};

/**completed this function is used to read relevent phone of a perticular brand */
exports.read = (req, res) => {
  const slug = req.params.slug.toLowerCase();
  Mobile.findOne({ slug })
    .populate("tags", "_id name slug")
    .populate("postedBy", "_id username name")
    .select(
      "_id postedBy title body mdesc mtitle slug excerpt fdDisplay fdBattery fdStorage fdCamera fdOs fdChipset displayType displaySize displayResolution displayProtection conWlan conBluetooth conGps conNfc conRadio conUsb conSensors  networkTechnology network2gband network3gband network4gband network5gband networkSpeed networkSimType mainCameraDetails mainCameraFeatures mainCameraVideo selfyCameraDetails selfyCameraFeatures selfyCameraVideo hardwareChipset hardwareProcessor hardwareGpu hardwareRam hardwareStorage softwareOs launchAnnouced launchAvailability soundHeadphone soundFeatures batteryDetails batteryFeatures bodyWeight bodyDimension bodyBuild bodyButtons bodyResistence productModels productPrice productColors flag tags createdAt updatedAt"
    )
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

/**completed this function is used to list relevent mobiles of a perticular brand */
exports.listRelated = (req, res) => {
  let limit = 4;
  const flag = 1;
  const { _id, tags } = req.body.blog;

  Mobile.find({ _id: { $ne: _id }, tags: { $in: tags }, flag })
    .limit(limit)
    .select("title slug createdAt updatedAt")
    .exec((err, blogs) => {
      if (err) {
        return res.status(400).json({
          error: "Blogs not found",
        });
      }
      if (!blogs) {
        return res.status(400).json({
          error: "no data found",
        });
      }
      res.json(blogs);
    });
};

/**completed this function is used to list relevent news of a perticular brand */
exports.listRelatedNews = (req, res) => {
  let limit = 5;
  const flag = 1;
  const { tags } = req.body.blog;

  News.find({ tags: { $in: tags }, flag })
    .limit(limit)
    .populate("postedBy", "_id name username")
    .select("title slug createdAt updatedAt postedBy")
    .exec((err, blogs) => {
      if (err) {
        return res.status(400).json({
          error: "Blogs not found",
        });
      }
      if (!blogs) {
        return res.status(400).json({
          error: "no data found",
        });
      }
      res.json(blogs);
    });
};

/**completed this function is used to list relevent reviews of a perticular brand */
exports.listRelatedReviews = (req, res) => {
  let limit = 5;
  const flag = 1;
  const { tags } = req.body.blog;

  Reviews.find({ tags: { $in: tags }, flag })
    .limit(limit)
    .populate("postedBy", "_id name username")
    .select("title slug createdAt updatedAt postedBy")
    .exec((err, blogs) => {
      if (err) {
        return res.status(400).json({
          error: "Blogs not found",
        });
      }
      if (!blogs) {
        return res.status(400).json({
          error: "no data found",
        });
      }
      res.json(blogs);
    });
};

exports.remove = (req, res) => {
  const slug = req.params.slug.toLowerCase();
  Mobile.findOneAndRemove({ slug }).exec((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }

    res.status(200).json({
      message: "Moile deleted successfully",
    });
  });
};

exports.update = (req, res) => {
  const slug = req.params.slug.toLowerCase();

  Mobile.findOne({ slug }).exec((err, oldBlog) => {
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

      const {
        title,
        body,
        tags,
        fdDisplay,
        fdBattery,
        fdStorage,
        fdCamera,
        fdOs,
        fdChipset,
        displayType,
        displaySize,
        displayResolution,
        displayProtection,
        conWlan,
        conBluetooth,
        conGps,
        conNfc,
        conRadio,
        conUsb,
        conSensors,
        networkTechnology,
        network2gband,
        network3gband,
        network4gband,
        network5gband,
        networkSpeed,
        networkSimType,
        mainCameraDetails,
        mainCameraFeatures,
        mainCameraVideo,
        selfyCameraDetails,
        selfyCameraFeatures,
        selfyCameraVideo,
        hardwareChipset,
        hardwareProcessor,
        hardwareGpu,
        hardwareRam,
        hardwareStorage,
        softwareOs,
        launchAnnouced,
        launchAvailability,
        soundHeadphone,
        soundFeatures,
        batteryDetails,
        batteryFeatures,
        bodyWeight,
        bodyDimension,
        bodyBuild,
        bodyButtons,
        bodyResistence,
        productModels,
        productPrice,
        productColors,
      } = fields;

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
          error: "Description content is required",
        });
      }

      if (body.length > 200) {
        return res.status(400).json({
          error: "descrption Content is too large",
        });
      }

      if (!tags || tags.length === 0) {
        return res.status(400).json({
          error: "At least one tag is required",
        });
      }
      if (!fdDisplay || !fdDisplay.length || fdDisplay.length > 27) {
        return res.status(400).json({
          error: "Featured-data display is required or too large",
        });
      }
      if (!fdBattery || !fdBattery.length || fdBattery.length > 27) {
        return res.status(400).json({
          error: "Featured-data Battery is required or too large",
        });
      }
      if (!fdStorage || !fdStorage.length || fdStorage.length > 27) {
        return res.status(400).json({
          error: "Featured-data storage is required or too large",
        });
      }
      if (!fdCamera || !fdCamera.length || fdCamera.length > 27) {
        return res.status(400).json({
          error: "Featured-data camera is required or too large",
        });
      }
      if (!fdOs || !fdOs.length || fdOs.length > 27) {
        return res.status(400).json({
          error: "Featured-data OS is required or too large",
        });
      }
      if (!fdChipset || !fdChipset.length || fdChipset.length > 27) {
        return res.status(400).json({
          error: "Featured-data chipset is required or too large",
        });
      }
      if (!displayType || !displayType.length || displayType.length > 150) {
        return res.status(400).json({
          error: "display type is required or too large",
        });
      }
      if (!displaySize || !displaySize.length || displaySize.length > 150) {
        return res.status(400).json({
          error: "display size is required or too large",
        });
      }
      if (
        !displayResolution ||
        !displayResolution.length ||
        displayResolution.length > 150
      ) {
        return res.status(400).json({
          error: "display resolution is required or too large",
        });
      }
      if (
        !displayProtection ||
        !displayProtection.length ||
        displayProtection.length > 150
      ) {
        return res.status(400).json({
          error: "display protection is required or too large",
        });
      }
      if (!conWlan || !conWlan.length || conWlan.length > 200) {
        return res.status(400).json({
          error: "connection WlAN is required or too large",
        });
      }
      if (!conBluetooth || !conBluetooth.length || conBluetooth.length > 200) {
        return res.status(400).json({
          error: "connection bluetooth is required or too large",
        });
      }
      if (!conGps || !conGps.length || conGps.length > 200) {
        return res.status(400).json({
          error: "connection GPS is required or too large",
        });
      }
      if (!conNfc || !conNfc.length || conNfc.length > 200) {
        return res.status(400).json({
          error: "connection NFC is required or too large",
        });
      }
      if (!conRadio || !conRadio.length || conRadio.length > 200) {
        return res.status(400).json({
          error: "connection radio is required or too large",
        });
      }
      if (!conUsb || !conUsb.length || conUsb.length > 200) {
        return res.status(400).json({
          error: "connection USB is required or too large",
        });
      }
      if (!conSensors || !conSensors.length || conSensors.length > 200) {
        return res.status(400).json({
          error: "connection sensonr is required or too large",
        });
      }
      if (
        !networkTechnology ||
        !networkTechnology.length ||
        networkTechnology.length > 200
      ) {
        return res.status(400).json({
          error: "network technology is required or too large",
        });
      }
      if (
        !network2gband ||
        !network2gband.length ||
        network2gband.length > 200
      ) {
        return res.status(400).json({
          error: "network 2G band is required or too large",
        });
      }
      if (
        !network3gband ||
        !network3gband.length ||
        network3gband.length > 200
      ) {
        return res.status(400).json({
          error: "network 3G band is required or too large",
        });
      }
      if (
        !network4gband ||
        !network4gband.length ||
        network4gband.length > 200
      ) {
        return res.status(400).json({
          error: "network 4G band is required or too large",
        });
      }
      if (
        !network5gband ||
        !network5gband.length ||
        network5gband.length > 200
      ) {
        return res.status(400).json({
          error: "network 5G band is required or too large",
        });
      }
      if (!networkSpeed || !networkSpeed.length || networkSpeed.length > 200) {
        return res.status(400).json({
          error: "network speed is required or too large",
        });
      }
      if (!networkSimType || !networkSimType.length) {
        return res.status(400).json({
          error: "network sim type is required or too large",
        });
      }
      if (
        !mainCameraDetails ||
        !mainCameraDetails.length ||
        mainCameraDetails.length > 200
      ) {
        return res.status(400).json({
          error: "main camera details is required or too large",
        });
      }
      if (
        !mainCameraFeatures ||
        !mainCameraFeatures.length ||
        mainCameraFeatures.length > 200
      ) {
        return res.status(400).json({
          error: "main camera features is required or too large",
        });
      }
      if (
        !mainCameraVideo ||
        !mainCameraVideo.length ||
        mainCameraVideo.length > 200
      ) {
        return res.status(400).json({
          error: "main camera video is required or too large",
        });
      }
      if (
        !selfyCameraDetails ||
        !selfyCameraDetails.length ||
        selfyCameraDetails.length > 200
      ) {
        return res.status(400).json({
          error: "selfy camera details is required or too large",
        });
      }
      if (
        !selfyCameraFeatures ||
        !selfyCameraFeatures.length ||
        selfyCameraFeatures.length > 200
      ) {
        return res.status(400).json({
          error: "selfy camera features is required or too large",
        });
      }
      if (
        !selfyCameraVideo ||
        !selfyCameraVideo.length ||
        selfyCameraVideo.length > 200
      ) {
        return res.status(400).json({
          error: "selfy camera video is required or too large",
        });
      }
      if (
        !hardwareChipset ||
        !hardwareChipset.length ||
        hardwareChipset.length > 200
      ) {
        return res.status(400).json({
          error: "hardware chipset is required or too large",
        });
      }
      if (
        !hardwareProcessor ||
        !hardwareProcessor.length ||
        hardwareProcessor.length > 200
      ) {
        return res.status(400).json({
          error: "hardware process is required or too large",
        });
      }
      if (!hardwareGpu || !hardwareGpu.length || hardwareGpu.length > 200) {
        return res.status(400).json({
          error: "hardware GPU is required or too large",
        });
      }
      if (!hardwareRam || !hardwareRam.length || hardwareRam.length > 200) {
        return res.status(400).json({
          error: "hardware Ram is required or too large",
        });
      }
      if (
        !hardwareStorage ||
        !hardwareStorage.length ||
        hardwareStorage.length > 200
      ) {
        return res.status(400).json({
          error: "hardware storage is required or too large",
        });
      }
      if (!softwareOs || !softwareOs.length || softwareOs.length > 200) {
        return res.status(400).json({
          error: "software OS is required or too large",
        });
      }
      if (
        !launchAnnouced ||
        !launchAnnouced.length ||
        launchAnnouced.length > 200
      ) {
        return res.status(400).json({
          error: "launch announced is required or too large",
        });
      }
      if (
        !launchAvailability ||
        !launchAvailability.length ||
        launchAvailability.length > 200
      ) {
        return res.status(400).json({
          error: "launch availability is required or too large",
        });
      }
      if (
        !soundHeadphone ||
        !soundHeadphone.length ||
        soundHeadphone.length > 200
      ) {
        return res.status(400).json({
          error: "sound headphone is required or too large",
        });
      }
      if (
        !soundFeatures ||
        !soundFeatures.length ||
        soundFeatures.length > 200
      ) {
        return res.status(400).json({
          error: "sound features is required or too large",
        });
      }
      if (
        !batteryDetails ||
        !batteryDetails.length ||
        batteryDetails.length > 200
      ) {
        return res.status(400).json({
          error: "battery details is required or too large",
        });
      }
      if (
        !batteryFeatures ||
        !batteryFeatures.length ||
        batteryFeatures.length > 200
      ) {
        return res.status(400).json({
          error: "battery fetures is required or too large",
        });
      }
      if (!bodyWeight || !bodyWeight.length || bodyWeight.length > 200) {
        return res.status(400).json({
          error: "battery weight is required or too large",
        });
      }
      if (
        !bodyDimension ||
        !bodyDimension.length ||
        bodyDimension.length > 200
      ) {
        return res.status(400).json({
          error: "body dimension is required or too large",
        });
      }
      if (!bodyBuild || !bodyBuild.length || bodyBuild.length > 200) {
        return res.status(400).json({
          error: "body build is required or too large",
        });
      }
      if (!bodyButtons || !bodyButtons.length || bodyButtons.length > 200) {
        return res.status(400).json({
          error: "body Buttons is required or too large",
        });
      }
      if (
        !bodyResistence ||
        !bodyResistence.length ||
        bodyResistence.length > 200
      ) {
        return res.status(400).json({
          error: "body Resistance is required or too large",
        });
      }
      if (
        !productColors ||
        !productColors.length ||
        productColors.length > 200
      ) {
        return res.status(400).json({
          error: "product Colors is required or too large",
        });
      }
      if (
        !productModels ||
        !productModels.length ||
        productModels.length > 200
      ) {
        return res.status(400).json({
          error: "product Models is required or too large",
        });
      }
      if (!productPrice || !productPrice.length || productPrice.length > 200) {
        return res.status(400).json({
          error: "product Price is required or too large",
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

  Mobile.findOne({ slug }).exec((err, post) => {
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

  Mobile.findOne({ slug }).exec((err, post) => {
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
    Mobile.find(
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

/**complted */
exports.listSearchUser = (req, res) => {
  //console.log(req.query);
  const { search } = req.query;

  if (search) {
    Mobile.find(
      {
        $or: [{ title: { $regex: search, $options: "i" }, flag: 1 }],
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
