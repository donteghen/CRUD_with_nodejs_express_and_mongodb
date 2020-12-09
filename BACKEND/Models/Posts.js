const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// create scheme for data object
const postsScheme = new mongoose.Schema({
    title:String,
    author:String,
    desc:String
});


module.exports = mongoose.model("posts", postsScheme);

