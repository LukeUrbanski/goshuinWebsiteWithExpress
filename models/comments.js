const mongoose = require("mongoose");

var commentSchema = mongoose.Schema({
    commentAuthor: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    comment: String,
    date: {type: Date, default: Date}
});

module.exports = mongoose.model("Comment", commentSchema);