var Goshuin =           require("./models/goshuin");

function seed(){

// Drop Goshuin collection
Goshuin.deleteMany({}, function(err){
    if(err){
        console.log(err);
    }
});

// Seed the collection with six entries
    Goshuin.create({
        locationName: "Shibuya Suikawa Shrine",
        image: "https://i.imgur.com/Q5KmUGD.jpg",
        ward: "Shibuya",
        townOrCity: "Tokyo",
        Prefecture: "Tokyo"
    }, function(err, createdItem){
    if(err){
        console.log(err);
    }
    console.log(createdItem);
});
}

module.exports = seed;