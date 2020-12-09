// require mongoose 
const mongoose = require('mongoose');

// import models to to start querying db
const Posts = mongoose.model('posts');

// export logic for handling route requests

exports.baseRoute =  async(req, res) =>{
    res.send('Server running');
}

exports.getPostRoute = async(req, res) =>{
    const posts =  await Posts.find();
    
    res.json(posts);
}

exports.createPost = async(req, res) =>{
    new Posts(req.body).save((err, data) =>{
        if(err) {
            res.status(500).json({
                message:"something went wrong, please try again"
            });
        }
        else{
            res.status(200).json({
                message:"Post successfully created"
            });
        }
    });
}

exports.postById = async(req, res) =>{
    const postId = req.params.id;
    await Posts.findById({_id:postId}, (err, data) =>{
        if(err) {
            res.status(500).json({
                message:"something went wrong, please try again"
            });
        }
        else{
            res.status(200).json({
                message:"Post successfully found",
                data
            });
        }
    });
}

exports.updateById = async(req, res) =>{
    const postId = req.params.id;
    await Posts.findByIdAndUpdate({_id:postId},{$set : req.body}, (err, data) =>{
        if(err) {
            res.status(500).json({
                message:"something went wrong, please try again"
            });
        }
        else{
            res.status(200).json({
                message:"update successfully!",
                data
            });
        }
    });
}

exports.deleteById = async(req, res) =>{
    const postId = req.params.id;
    await Posts.findOneAndDelete({_id:postId}, (err, data) =>{
        if(err) {
            res.status(500).json({
                message:"something went wrong, please try again"
            });
        }
        else{
            res.status(200).json({
                message:"delete successfully!",
                data
            });
        }
    });
}