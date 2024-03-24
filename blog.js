const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    image: {
        data: Buffer,
        contentType: String
        // type: String,
        // required: true
    },


}, { timestamps: true });

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;