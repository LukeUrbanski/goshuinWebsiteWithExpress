const mongoose = require("mongoose");

var commentSchema = mongoose.Schema({
    comment: String
});

module.exports = mongoose.model("Comment", commentSchema);