var express             = require("express"),
    router              = express.Router(),
    Goshuin             = require("../models/goshuin");


// Main goshuin index route
router.get("/goshuins", function(req, res){
    Goshuin.find({}, function(err, foundGoshuins){
        if(err){
            console.log(err);
        } else {
            res.render("goshuins/index", {goshuins: foundGoshuins});
        }
    });
});

// Create a goshuin form route
router.get("/goshuins/new", function(req, res){
    res.render("goshuins/new");
});

// Read a specific goshuin route
router.get("/goshuins/:id", function(req, res){
    Goshuin.findById(req.params.id, function(err, foundGoshuin){
        if(err){
            console.log(err);
        } 
        res.render("goshuins/show", {goshuin: foundGoshuin});
    });
});

module.exports = router;