// Load requirements
var express         = require("express"),
    router          = express.Router(),
    User            = require("../models/user.js");

//Landing page route    
router.get("/", function(req, res){
    res.render("landing");
});

// Create user form
router.get("/user/register", function(req, res){
    res.render("register");
})

// Create a new user
router.post("/user", function(req, res){
    User.register({username: req.body.newUser.username}, req.body.newUser.password, function(err, newUser){
        if(err){
            console.log(err);
        } else {
            console.log(newUser);
        }
    });
});

//Export the routes
module.exports = router;