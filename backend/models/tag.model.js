const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
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
    }
}, { timestamps: true });

module.exports = mongoose.model('Tag', tagSchema, 'tags');