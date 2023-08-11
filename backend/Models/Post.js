const mongoose = require("mongoose");
const { Schema } = mongoose;
const PostSchema = new Schema({
    text: {
        type: String,
    },
    image: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    topic: {
        type: String
    },
    type: {
        type: String
    },
    comments: {
        type: Number
    }
});

const Post = mongoose.model("POST_OF_USERS", PostSchema);
module.exports = Post;