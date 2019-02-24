var Goshuin =           require("./models/goshuin");

function seed(){

// Drop Goshuin collection
Goshuin.deleteMany({}, function(err){
    if(err){
        console.log(err);
    }
});

// Use the following data to manually test the create route
        // shrineOrTempleName: "Ise shrine",
        // generalLocation: "Ise shrine complex",
        // prefecture: "Mie",
        // image: "https://i.imgur.com/qbIsDHK.jpg",
        // comment: "A goshuin from Japan's biggest shrine, Ise Shrine in Mie prefecture. What makes this special is that it is from January 1st, which is the busiest time of the year for shrines as it is hatsumoude. In addition to that, this shrine complex actually has two shrines, gekku (outer shrine) and naiku (inner shrine)."

var seedData = [
        {
        shrineOrTempleName: "Shibuya Suikawa Shrine",
        generalLocation: "Tokyo",
        prefecture: "Tokyo",
        image: "https://i.imgur.com/Q5KmUGD.jpg",
        comment: "",
        date: ""
    }, {
        shrineOrTempleName: "Musashi Mitake Shrine",
        generalLocation: "Mount Mitake",
        prefecture: "Tokyo",
        image: "https://i.imgur.com/dUrotTy.jpg",
        comment: "",
        date: ""
    },
    {
        shrineOrTempleName: "Itsukushima shrine",
        generalLocation: "Miyajima",
        prefecture: "Hiroshima",
        image: "https://i.imgur.com/NCpEZRF.jpg",
        comment: "",
        date: ""
    },
    {
        shrineOrTempleName: "Hiroshima Gokoku Shrine",
        generalLocation: "Hiroshima town",
        prefecture: "Hiroshima",
        image: "https://i.imgur.com/MveeMmd.jpg",
        comment: "",
        date: ""
    },
    {
        shrineOrTempleName: "Takagi Shrine",
        generalLocation: "Sumida",
        prefecture: "Tokyo",
        image: "https://i.imgur.com/eUIwRl7.jpg",
        comment: "",
        date: ""
    },
    {
        shrineOrTempleName: "Hanazono Shrine",
        generalLocation: "Shinjuku",
        prefecture: "Tokyo",
        image: "https://i.imgur.com/uCAOxwi.jpg",
        comment: "",
        date: ""
    },
    {
        shrineOrTempleName: "Tsumakoi Shrine",
        generalLocation: "Bunkyo",
        prefecture: "Tokyo",
        image: "https://i.imgur.com/Vpjhbnu.jpg",
        comment: "",
        date: ""
    },
    {
        shrineOrTempleName: "Karasumori Shrine",
        generalLocation: "Shinbashi",
        prefecture: "Tokyo",
        image: "https://i.imgur.com/KCGVjpC.jpg",
        comment: "",
        date: ""
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