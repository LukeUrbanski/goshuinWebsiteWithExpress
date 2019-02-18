// Load requirements
var express         = require("express"),
    router          = express.Router();

//Landing page route    
router.get("/", function(req, res){
    res.render("landing");
});    

//Export the routes
module.exports = router;