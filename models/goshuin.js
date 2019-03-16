var mongoose            = require("mongoose");

// schema
var goshuinSchema = new mongoose.Schema({
    authorId: String,
    shrineOrTempleName: String,
    generalLocation: String,
    prefecture: String,
    image: String,
    comment: String,
    date: String
});

// compile model into schema
module.exports = mongoose.model("Goshuin", goshuinSchema);