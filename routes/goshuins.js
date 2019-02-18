var express             = require("express"),
    router              = express.Router();

router.get("/goshuins", function(req, res){
    res.send("This is the show page");
});

module.exports = router;