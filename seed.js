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
        Prefecture: "Tokyo"
    }, {
        shrineOrTempleName: "Musashi Mitake Shrine",
        image: "https://i.imgur.com/dUrotTy.jpg",
        generalLocation: "Mount Mitake",
        Prefecture: "Tokyo"
    },
    {
        shrineOrTempleName: "Itsukushima shrine",
        image: "https://i.imgur.com/NCpEZRF.jpg",
        generalLocation: "Miyajima",
        Prefecture: "Hiroshima"  
    },
    {
        shrineOrTempleName: "Hiroshima Gokoku Shrine",
        image: "https://i.imgur.com/MveeMmd.jpg",
        generalLocation: "Hiroshima town",
        Prefecture: "Hiroshima"  
    },
    {
        shrineOrTempleName: "Takagi Shrine",
        image: "https://i.imgur.com/eUIwRl7.jpg",
        generalLocation: "Sumida",
        Prefecture: "Tokyo"  
    },
    {
        shrineOrTempleName: "Hanazono Shrine",
        image: "https://i.imgur.com/uCAOxwi.jpg",
        generalLocation: "Shinjuku",
        Prefecture: "Tokyo"  
    },
    {
        shrineOrTempleName: "Tsumakoi Shrine",
        image: "https://i.imgur.com/Vpjhbnu.jpg",
        generalLocation: "Bunkyo",
        Prefecture: "Tokyo"  
    },
    {
        shrineOrTempleName: "Karasumori Shrine",
        image: "https://i.imgur.com/KCGVjpC.jpg",
        generalLocation: "Shinbashi",
        Prefecture: "Tokyo"  
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