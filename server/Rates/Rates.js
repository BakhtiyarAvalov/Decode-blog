const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new mongoose.Schema({
    rate: Number,
    text: String,
    filmId: {type: Schema.Types.ObjectId, ref: 'blog'},
    authorId: {type: Schema.Types.ObjectId, ref: 'user'},
    date: Date.now()
})
module.exports = mongoose.model('category', CategorySchema)