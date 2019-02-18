var express             = require("express"),
    router              = express.Router(),
    Goshuin             = require("../models/goshuin");

router.get("/goshuins", function(req, res){
    Goshuin.find({}, function(err, foundGoshuins){
        if(err){
            console.log(err);
        } else {
            res.render("goshuins/index.ejs", {goshuins: foundGoshuins});
        }
    });
});

module.exports = router;