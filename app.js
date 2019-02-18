// Load requirements
var express             = require("express"),
    app                 = express();
    
// Load routes
var indexRoutes         = require("./routes/index.js"),
    goshuinRoutes       = require("./routes/goshuins.js");

// General app settings
app.set("view engine", "ejs");
app.use(express.static("public"));

// Utilize route variables
app.use(indexRoutes);
app.use(goshuinRoutes);

// Create a UNIX socket
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The server has started");
});