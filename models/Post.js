const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema(
    {
        title: String,
        content: String,
        time: {
            type: Date,
            default: Date.now()
        },
        likes: Number,
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }
);

module.exports = mongoose.model('Post', PostSchema)