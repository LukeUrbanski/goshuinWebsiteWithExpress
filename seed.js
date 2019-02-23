var Goshuin =           require("./models/goshuin");

function seed(){

// Drop Goshuin collection
Goshuin.deleteMany({}, function(err){
    if(err){
        console.log(err);
    }
});

var seedData = [
        {
        shrineOrTempleName: "Shibuya Suikawa Shrine",
        image: "https://i.imgur.com/Q5KmUGD.jpg",
        generalLocation: "Tokyo",
        prefecture: "Tokyo"
    }, {
        shrineOrTempleName: "Musashi Mitake Shrine",
        image: "https://i.imgur.com/dUrotTy.jpg",
        generalLocation: "Mount Mitake",
        prefecture: "Tokyo"
    },
    {
        shrineOrTempleName: "Itsukushima shrine",
        image: "https://i.imgur.com/NCpEZRF.jpg",
        generalLocation: "Miyajima",
        prefecture: "Hiroshima"  
    },
    {
        shrineOrTempleName: "Hiroshima Gokoku Shrine",
        image: "https://i.imgur.com/MveeMmd.jpg",
        generalLocation: "Hiroshima town",
        prefecture: "Hiroshima"  
    },
    {
        shrineOrTempleName: "Takagi Shrine",
        image: "https://i.imgur.com/eUIwRl7.jpg",
        generalLocation: "Sumida",
        prefecture: "Tokyo"  
    },
    {
        shrineOrTempleName: "Hanazono Shrine",
        image: "https://i.imgur.com/uCAOxwi.jpg",
        generalLocation: "Shinjuku",
        prefecture: "Tokyo"  
    },
    {
        shrineOrTempleName: "Tsumakoi Shrine",
        image: "https://i.imgur.com/Vpjhbnu.jpg",
        generalLocation: "Bunkyo",
        prefecture: "Tokyo"  
    },
    {
        shrineOrTempleName: "Karasumori Shrine",
        image: "https://i.imgur.com/KCGVjpC.jpg",
        generalLocation: "Shinbashi",
        prefecture: "Tokyo"  
    }
    ]

// Seed the collection with six entries
    Goshuin.create(seedData, function(err, createdItem){
    if(err){
        console.log(err);
    }
    console.log(createdItem);
});
}

module.exports = seed;