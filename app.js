// Load requirements
var express             = require("express"),
    app                 = express(),
    mongoose            = require("mongoose"),
    seedDB              = require ("./seed.js"),
    bodyParser          = require("body-parser");
    
// Require models
var Goshuin = require("./models/goshuin.js");
    
// Connect to the database
mongoose.connect('mongodb://localhost:27017/goshuin', {useNewUrlParser: true});

// Seed the database
seedDB();

// Load routes
var indexRoutes         = require("./routes/index.js"),
    goshuinRoutes       = require("./routes/goshuins.js");

// General app settings
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// Utilize route variables
app.use(indexRoutes);
app.use(goshuinRoutes);

// Create a UNIX socket
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The server has started");
});