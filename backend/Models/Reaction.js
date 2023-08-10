const mongoose = require("mongoose");
const { Schema } = mongoose;
const ReactionSchema = new Schema({

    comment: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});

const Reaction = mongoose.model("Blogging_Reactions", ReactionSchema);
module.exports = Reaction;