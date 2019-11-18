const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI || 
    "mongodb://localhost/projectSchema"
);

const userSeed = [
    {
        username: "Jett34",
        fullName: "Jedidiah Garza",
        email: "jedgarza@gmail.com",
        age: "24",
        gender: "Male",
        password: "12345678",
        pets: "Yes",
        occupation: "Tired"

    }
];

db.User
    .remove({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
