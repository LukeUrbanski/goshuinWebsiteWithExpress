// Load requirements
var express                 = require("express"),
    app                     = express(),
    mongoose                = require("mongoose"),
    seedDB                  = require ("./seed.js"),
    methodOverride          = require("method-override"),
    bodyParser              = require("body-parser"),
    expressSession          = require("express-session"),
    passport                = require("passport"),
    LocalStrategy           = require("passport-local"),
    FacebookStrategy        = require("passport-facebook"),
    facebookAppDetails      = require("./facebookAppDetails");

// =================================
// Database connection and models
// =================================
    
// Require models
const Goshuin = require("./models/goshuin.js");
const User = require("./models/user.js");
    
// Connect to the database
mongoose.connect('mongodb://localhost:27017/goshuin', {useNewUrlParser: true});

// Seed the database
seedDB();

// =================================
// Miscellaneous settings
// =================================

// Load routes
var indexRoutes         = require("./routes/index.js"),
    goshuinRoutes       = require("./routes/goshuins.js");

// General app settings
app.set("view engine", "ejs");

//Middleware settings
app.use(
        express.static("public"),
        methodOverride('_method'),
        expressSession({
            secret: "1t3snsvnvosfinvosfvn3294nr3",
            resave: false,
            saveUninitialized: true
        }),
        bodyParser.urlencoded({extended: true}),
        passport.initialize(),
        passport.session(),
        //Save the current user object
        function(req, res, next){
        res.locals.currentUser = req.user;
        next();
        }
    );

// =================================
// Additional passport configuration
// =================================

// Local strategy
passport.use(User.createStrategy());
// Facebook strategy
passport.use(new FacebookStrategy({
    clientID: facebookAppDetails.facebookAppId,
    clientSecret: facebookAppDetails.facebookAppSecret,
    callbackURL: facebookAppDetails.facebookAppURL
    },
    function(accessToken, refreshToken, profile, done){
        User.findOne({facebookId: profile.id}, function(err, user){
            if(err){
                console.log(err);
            }
            if (!err && user != null){
                done(null, user);
            } else {
            // If no user is found then create a new user
                user = new User({
                    facebookID: profile.id,
                    username: profile.displayName
                });
                user.save(function(err){
                    if(err){
                        console.log(err);
                    } else {
                        done(null, user);
                    }
                });
            }
        });
    }
));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Utilize route variables
app.use(indexRoutes);
app.use(goshuinRoutes);

// Create a UNIX socket
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The server has started");
});