const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    titleBlog: String,
    category: String,
    content: String,
});
module.exports = mongoose.model('Blog', BlogSchema);