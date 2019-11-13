const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/projectSchema"
);

const userSeed = [
    {
        UserName: "Jett34",
        Password: "4thFireShadow",
        FirstName: "Jedidiah",
        LastName: "Garza",
        DOB: "05/15/1995",
        Gender: "Male",
        Email: "JedGarza@Gmail.com",
        date: new Date(Date.now())
    }
];

db.Prj
    .remove({})
    .then(() => db.Prj.collection.insertMany(userSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
