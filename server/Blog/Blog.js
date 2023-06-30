const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const BlogSchema = new mongoose.Schema({
    titleBlog: String,
    category: {type: Schema.Types.ObjectId, ref: 'category'},
    content: String,
    image: String,
});
module.exports = mongoose.model('Blog', BlogSchema);