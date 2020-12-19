const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const mobileSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      min: 3,
      max: 160,
      required: true,
    },
    brand: {
      type: ObjectId,
      ref: "MobileSchema",
    },
    source: {
      type: String,
    },
    body: {
      type: String,
      required: true,
      min: 80,
      max: 200,
    },
    slug: {
      type: String,
      unique: true,
      index: true,
    },
    fdDisplay: {
      type: String,
    },
    fdBattery: {
      type: String,
    },
    fdStorage: {
      type: String,
    },
    fdCamera: {
      type: String,
    },
    fdOs: {
      type: String,
    },
    fdChipset: {
      type: String,
    },
    displayType: {
      type: String,
    },
    displaySize: {
      type: String,
    },
    displayResolution: {
      type: String,
    },
    displayProtection: {
      type: String,
    },
    conWlan: {
      type: String,
    },
    conBluetooth: {
      type: String,
    },
    conGps: {
      type: String,
    },
    conNfc: {
      type: String,
    },
    conRadio: {
      type: String,
    },
    conUsb: {
      type: String,
    },
    conSensors: {
      type: String,
    },
    networkTechnology: {
      type: String,
    },
    network2gband: {
      type: String,
    },
    network3gband: {
      type: String,
    },
    network4gband: {
      type: String,
    },
    network5gband: {
      type: String,
    },
    networkSpeed: {
      type: String,
    },
    networkSimType: {
      type: String,
    },
    mainCameraDetails: {
      type: String,
    },
    mainCameraFeatures: {
      type: String,
    },
    mainCameraVideo: {
      type: String,
    },
    selfyCameraDetails: {
      type: String,
    },
    selfyCameraFeatures: {
      type: String,
    },
    selfyCameraVideo: {
      type: String,
    },
    hardwareChipset: {
      type: String,
    },
    hardwareProcessor: {
      type: String,
    },
    hardwareGpu: {
      type: String,
    },
    hardwareRam: {
      type: String,
    },
    hardwareStorage: {
      type: String,
    },
    softwareOs: {
      type: String,
    },
    launchAnnouced: {
      type: String,
    },
    launchAvailability: {
      type: String,
    },
    soundHeadphone: {
      type: String,
    },
    soundFeatures: {
      type: String,
    },
    batteryDetails: {
      type: String,
    },
    batteryFeatures: {
      type: String,
    },
    bodyWeight: {
      type: String,
    },
    bodyDimension: {
      type: String,
    },
    bodyBuild: {
      type: String,
    },
    bodyButtons: {
      type: String,
    },
    bodyResistence: {
      type: String,
    },
    productColors: {
      type: String,
    },
    productModels: {
      type: String,
    },
    productPrice: {
      type: String,
    },
    excerpt: {
      type: String,
      max: 1000,
    },
    mtitle: {
      type: String,
    },
    mdesc: {
      type: String,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
    tags: [{ type: ObjectId, ref: "Tag", required: true }],
    postedBy: {
      type: ObjectId,
      ref: "User",
    },
    flag: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Mobile", mobileSchema, "mobile");
