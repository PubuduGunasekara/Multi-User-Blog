const Tag = require('../models/tag.model');
const Review = require("../models/review.model");
const Mobile = require("../models/mobile.model");
const News = require("../models/news.model");
const slugify = require('slugify');
const { errorHandler } = require('../helpers/dbErrorHandler');

exports.create = (req, res) => {
    const { name } = req.body;
    let slug = slugify(name).toLowerCase();

    let tag = new Tag({ name, slug })

    tag.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(data)
    });
}

/**
 * COMPLETED!
 */
exports.list = (req, res) => {
    Tag.find().exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }

        res.json(data);
    })
}


exports.read = (req, res) => {
    const slug = req.params.slug.toLowerCase();
    Tag.findOne({ slug }).exec((err, tag) => {
        if (err) {
            return res.status(400).json({
                error: 'Tag not found'
            });
        }
        News.find({ tags: tag })
            .populate('tags', '_id name slug')
            .populate('postedBy', '_id name')
            .select('_id title slug excerpt categories postedBy tags createdAt updatedAt')
            .exec((err, newsData) => {
                if (err) {
                    return res.status(400).json({
                        error: errorHandler(err)
                    });
                }
                if(newsData){
                    Review.find({tags: tag})
                    .populate('tags', '_id name slug')
                    .populate('postedBy', '_id name')
                    .select('_id title slug excerpt categories postedBy tags createdAt updatedAt')
                    .exec((err, reviewData) => {
                            if (err) {
                                return res.status(400).json({
                                    error: errorHandler(err)
                                });
                            }
                            if(reviewData){
                                Mobile.find({tags: tag})
                                .populate('tags', '_id name slug')
                                .populate('postedBy', '_id name')
                                .select('_id title slug excerpt categories postedBy tags createdAt updatedAt')
                                .exec((err,mobileData)=>{
                                    if (err) {
                                        return res.status(400).json({
                                            error: errorHandler(err)
                                        });
                                    }
                                    res.json({data:{
                                        tag:tag,
                                        news:newsData,
                                        reviews:reviewData,
                                        mobiles:mobileData
                                    }});

                                })
                            }else{
                                res.json({data:{
                                    tag:tag,
                                    news:newsData,
                                    reviews:reviewData,
                                    mobiles:mobileData
                                }});
                            }
                        })
                }
                else{
                    res.json({data:{
                        tag:tag,
                        news:newsData,
                        reviews:reviewData,
                        mobiles:mobileData
                    }});
                }
            });

    });
}

exports.remove = (req, res) => {
    const slug = req.params.slug.toLowerCase();
    Tag.findOneAndRemove({ slug }).exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }

        res.status(200).json({
            message: 'Tag deleted successfully'
        });

    })
}