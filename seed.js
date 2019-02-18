var Goshuin =           require("./models/goshuin");

function seed(){

// Drop Goshuin collection
Goshuin.deleteMany({}, function(err){
    if(err){
        console.log(err);
    }
});

// Seed the collection with six entries
    Goshuin.create([
        {
        shrineOrTempleName: "Shibuya Suikawa Shrine",
        image: "https://i.imgur.com/Q5KmUGD.jpg",
        ward: "Shibuya",
        generalLocation: "Tokyo",
        Prefecture: "Tokyo"
    }, {
        shrineOrTempleName: "Musashi Mitake Shrine",
        image: "https://i.imgur.com/dUrotTy.jpg",
        townOrCity: "Mount Mitake",
        Prefecture: "Tokyo"
    }
        
    ], function(err, createdItem){
    if(err){
        console.log(err);
    }
    console.log(createdItem);
});
}

module.exports = seed;