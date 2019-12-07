// Requirements
var express     = require("express"),
    router      = express.Router(),
    Goshuin     = require("../models/goshuin"),
    Comment     = require("../models/comments");


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

// Post the new comment by finding the relevant goshuin,
// creating a comment and then adding it to the relevant goshuin array
router.post("/goshuins/:id/comments/", function(req, res){
    // Store the posted data into a variable
    var postedComment = {
        commentAuthor: req.user._id,
        comment: req.body.comment,
   }
   // Find the relevant goshuin
   Goshuin.findById(req.params.id, function(err, foundGoshuin){
       if(err){
           console.log(err);
           res.redirect("/");
       } else {
           // Create the comment with the posted data
           Comment.create(postedComment, function(err, newComment){
               if(err){
                   console.log(err);
                   res.redirec("/");
               } else {
                // Add the comment to the goshuin document array   
                foundGoshuin.userComments.push(newComment);
                foundGoshuin.save();
                res.redirect("/goshuins/" + foundGoshuin._id);
               }
           })
       }
   })
})

// =================================
// Show edit comment form
// =================================

router.get("/goshuins/:id/comments/:comment_id/edit", function(req, res){
	res.render("comments/edit.ejs");
})

module.exports = router;