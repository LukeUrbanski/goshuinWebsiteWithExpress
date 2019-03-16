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
router.get("/goshuins/new", isLoggedIn, function(req, res){
    res.render("goshuins/new");
});

// Create a goshuin post route
router.post("/goshuins", isLoggedIn, function(req, res){
    var newGoshuin = {
        authorId: req.user._id,
        shrineOrTempleName: req.body.shrineOrTempleName,
        generalLocation: req.body.generalLocation,
        prefecture: req.body.prefecture,
        image: req.body.image,
        comment: req.body.comment
    }
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
router.get("/goshuins/:id/edit", goshuinAuthorisationPermission, function(req, res){
   Goshuin.findById(req.params.id, function(err, foundGoshuin){
       if(err){
           console.log("error");
       } else {
           res.render("goshuins/edit", {goshuin: foundGoshuin});
       }
   }); 
});

// Update goshuin post route
router.put("/goshuins/:id", goshuinAuthorisationPermission, function(req, res){
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
router.delete("/goshuins/:id", goshuinAuthorisationPermission, function(req, res){
   Goshuin.findByIdAndDelete(req.params.id, function(err, deletedGoshuin){
       if(err){
           console.log(err);
       } else {
           res.redirect("/goshuins");
       }
   }); 
});


// Function to check if there is a current user logged in and redirect the user if not
function isLoggedIn(req, res, next){
    if(!req.user){
        return res.redirect("/login");
    }
    return next();
}

function goshuinAuthorisationPermission(req, res, next){
    //Check if the user is authenticated
    if(req.isAuthenticated()){
        // Check if the authenticated user ID matches the goshuin author ID
        Goshuin.findById(req.params.id, function(err, foundGoshuin){
            if(err){
                console.log(err);
            } else {
                // If the campground author ID matches the authenticated user's ID
                if(foundGoshuin.authorId == req.user._id){
                    return next();
                } 
                // If the campground author ID does not match the authenticated user's ID
                else {
                    res.redirect("back");
                }
            }
        })
    } else {
        res.redirect("/login");
    }
}

module.exports = router;