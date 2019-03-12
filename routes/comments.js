// Requirements
var express     = require("express"),
    router      = express.Router(),
    Goshuin     = require("../models/goshuin");


// =================================
// Show new comment form
// =================================

router.get("/goshuins/:id/comments/new", function(req, res){
    Goshuin.findById(req.params.id, function(err, foundGoshuin){
        if(err){
            console.log(err);
        } else {
            res.render("comments/new.ejs", {goshuin: foundGoshuin});
        }
    });
});

module.exports = router;