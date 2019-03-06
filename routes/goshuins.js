var express             = require("express"),
    router              = express.Router(),
    Goshuin             = require("../models/goshuin");

//==============
// Index route
//==============

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

//==============
// Create routes
//==============

// Create a goshuin form route
router.get("/goshuins/new", function(req, res){
    res.render("goshuins/new");
});

// Create a goshuin post route
router.post("/goshuins", function(req, res){
    var newGoshuin = req.body;
    Goshuin.create(newGoshuin, function(err, newGoshuin){
        if(err){
            console.log(err);
        } else {
            res.redirect("/goshuins")
        }
        
    });
});

//==============
// Read route
//==============

// Read a specific goshuin route
router.get("/goshuins/:id", function(req, res){
    Goshuin.findById(req.params.id, function(err, foundGoshuin){
        if(err){
            console.log(err);
        } 
        res.render("goshuins/show", {goshuin: foundGoshuin});
    });
});



// =============
// Edit routes
//==============

// Show goshuin edit form
router.get("/goshuins/:id/edit", function(req, res){
   Goshuin.findById(req.params.id, function(err, foundGoshuin){
       if(err){
           console.log("error");
       } else {
           res.render("goshuins/edit", {goshuin: foundGoshuin});
       }
   }); 
});

// Update goshuin post route
router.put("/goshuins/:id", function(req, res){
    Goshuin.findByIdAndUpdate(req.params.id,  req.body.goshuin, function(err, updatedGoshuin){
        if(err){
            console.log(err);
        } else {
            res.redirect("/goshuins/" + req.params.id);
        }
    });
});

//==============
// Delete route
//==============

// Delete a goshuin
router.delete("/goshuins/:id", function(req, res){
   Goshuin.findByIdAndDelete(req.params.id, function(err, deletedGoshuin){
       if(err){
           console.log(err);
       } else {
           res.redirect("/goshuins");
       }
   }); 
});

module.exports = router;