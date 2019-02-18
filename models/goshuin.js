var mongoose            = require("mongoose");

// schema
var goshuinSchema = new mongoose.Schema({
    locationName: String,
    image: String,
    ward: String,
    townOrCity: String,
    Prefecture: String
});

// compile model into schema
module.exports = mongoose.model("Goshuin", goshuinSchema);