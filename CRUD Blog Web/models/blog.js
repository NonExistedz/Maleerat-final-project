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
        required: true,
        min: 0,
    },

    img: {
        type: String,
        required: true,
    }


}, { timestamps: true });

const Blog = mongoose.model('Shoes', blogSchema);
module.exports = Blog;
