const mongoose = require('mongoose');

const mobileCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        max: 32
    },
    slug: {
        type: String,
        index: true,
        unique: true
    },
    body: {
        type: {},
        required: true,
        min: 200,
        max: 2000000
    },
    excerpt: {
        type: String,
        max: 1000
    },
    mtitle: {
        type: String
    },
    mdesc: {
        type: String
    },
    photo: {
        data: Buffer,
        contentType: String
    }

}, { timestamps: true });

module.exports = mongoose.model('MobileSchema', mobileCategorySchema, 'mobileSchemas');