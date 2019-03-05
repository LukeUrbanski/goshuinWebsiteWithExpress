// Load requirements
var express                 = require("express"),
    app                     = express(),
    mongoose                = require("mongoose"),
    seedDB                  = require ("./seed.js"),
    methodOverride          = require("method-override"),
    bodyParser              = require("body-parser"),
    expressSession          = require("express-session"),
    passport                = require("passport"),
    LocalStrategy           = require("passport-local");
    
// Require models
const Goshuin = require("./models/goshuin.js");
const User = require("./models/user.js");
    
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
app.use(methodOverride('_method'));

// Authentication general settings
app.use(expressSession({
  secret: "1t3snsvnvosfinvosfvn3294nr3",
  resave: false,
  saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(passport.initialize());
app.use(passport.session());

// Passport strategy configuration
passport.use(new LocalStrategy(
    function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
    ));

// Utilize route variables
app.use(indexRoutes);
app.use(goshuinRoutes);

// Create a UNIX socket
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The server has started");
});