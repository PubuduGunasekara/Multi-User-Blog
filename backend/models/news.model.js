const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const newsSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        min: 3,
        max: 160,
        required: true
    },
    slug: {
        type: String,
        unique: true,
        index: true
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
    },
    tags: [{ type: ObjectId, ref: 'Tag', required: true }],
    postedBy: {
        type: ObjectId,
        ref: 'User'
    },
    flag: {
        type: Number,
        default: 0
    }

}, { timestamps: true });

module.exports = mongoose.model('News', newsSchema);