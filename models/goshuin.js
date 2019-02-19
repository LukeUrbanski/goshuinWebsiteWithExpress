var mongoose            = require("mongoose");

// schema
var goshuinSchema = new mongoose.Schema({
    shrineOrTempleName: String,
    image: String,
    generalLocation: String,
    Prefecture: String
});

// compile model into schema
module.exports = mongoose.model("Goshuin", goshuinSchema);