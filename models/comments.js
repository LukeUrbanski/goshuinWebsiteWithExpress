const mongoose = require("mongoose");

var commentSchema = mongoose.Schema({
    commentAuthor: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    comment: String
});

module.exports = mongoose.model("Comment", commentSchema);