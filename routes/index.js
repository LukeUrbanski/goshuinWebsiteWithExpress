// Load requirements
var express         = require("express"),
    router          = express.Router(),
    User            = require("../models/user.js"),
    passport        = require("passport");

//Landing page route    
router.get("/", function(req, res){
    res.render("landing");
});

// ===============
// Register routes
// ===============

// Show create user form
router.get("/register", function(req, res){
    res.render("register");
})

// Create a new user
router.post("/register", function(req, res){
    User.register({username: req.body.newUser.username}, 
    req.body.newUser.password,
    function(err, newUser){
        if(err){
            console.log(err);
        } else {
            res.redirect("/goshuins");
        }
    });
});

// ===============
// Login routes
// ===============

// Show login form
router.get("/login", function(req, res){
   res.render("login"); 
});

// Login route
router.post('/login', passport.authenticate('local', { 
    successRedirect: '/goshuins',
    failureRedirect: '/login'})
);

// ===============
// Logout routes
// ===============
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/goshuins');
});

//Export the routes
module.exports = router;