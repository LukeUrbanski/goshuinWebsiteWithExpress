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
        comment: "A colourful goshuin, the colours and flower stamped use changes every month.",
        date: ""
    }, {
        shrineOrTempleName: "Musashi Mitake Shrine",
        generalLocation: "Mount Mitake",
        prefecture: "Tokyo",
        image: "https://i.imgur.com/dUrotTy.jpg",
        comment: "This shrine is on top of Mount Mitake, it's a 1 or 2 hour walk to this shrine from the base of the mountain but you can take a cable car to make the journey much more shorter.",
        date: ""
    },
    {
        shrineOrTempleName: "Itsukushima shrine",
        generalLocation: "Miyajima",
        prefecture: "Hiroshima",
        image: "https://i.imgur.com/NCpEZRF.jpg",
        comment: "This is a very famous shrine located on Miyajima, Hiroshima. In particular, the shrine gate (torii) in the water is a very popular photographic spot.",
        date: ""
    },
    {
        shrineOrTempleName: "Hiroshima Gokoku Shrine",
        generalLocation: "Hiroshima town",
        prefecture: "Hiroshima",
        image: "https://i.imgur.com/MveeMmd.jpg",
        comment: "This is the shrine located in Hiroshima town, a short walk from the castle. Carps seem to be popular here, they are also the mascot for the famous Hiroshima Carps baseball team which makes me wonder why carps seem to be popular in Hiroshima town.",
        date: ""
    },
    {
        shrineOrTempleName: "Takagi Shrine",
        generalLocation: "Sumida",
        prefecture: "Tokyo",
        image: "https://i.imgur.com/eUIwRl7.jpg",
        comment: "This shrine is near the Tokyo Skytree, what is interesting is the vibrant purple colour of the shrine.",
        date: ""
    },
    {
        shrineOrTempleName: "Hanazono Shrine",
        generalLocation: "Shinjuku",
        prefecture: "Tokyo",
        image: "https://i.imgur.com/uCAOxwi.jpg",
        comment: "The handwriting certainly is unique, I can't tell the date I got this goshuin as a result.",
        date: ""
    },
    {
        shrineOrTempleName: "Tsumakoi Shrine",
        generalLocation: "Bunkyo",
        prefecture: "Tokyo",
        image: "https://i.imgur.com/Vpjhbnu.jpg",
        comment: "This cat goshuin was limited to just a few days. Nearly the whole thing is a stamp whereas the characters are usually written by a fude pen.",
        date: ""
    },
    {
        shrineOrTempleName: "Karasumori Shrine",
        generalLocation: "Shinbashi",
        prefecture: "Tokyo",
        image: "https://i.imgur.com/KCGVjpC.jpg",
        comment: "This is arguably the most popular colour goshuin in Tokyo, it frequently turns up in books relating to goshuins.",
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