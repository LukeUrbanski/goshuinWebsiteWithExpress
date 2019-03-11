const mongoose = require("mongoose");
const passportLocalMongoose   = require("passport-local-mongoose");

var userSchema = mongoose.Schema({
    facebookId: Number,
    username: String,
    password: String
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);