const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../models/user-model');
// var db = require("../models/")

passport.serializeUser((user, done) =>{
        done(null, user.id);
});
passport.serializeUser((id, done) =>{
    User.findById(id).then((user) => {
      done(null, user);   
    });
   
   
});

passport.use(
    new GoogleStrategy({
        //options for the google strat
        callbackURL: '/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
    }, (accessToken, refreshToken, profile, done) => {
        //passport cb function
        console.log('passport cb function fired');
        console.log(profile);
        // new User({
        //     username: profile.displayName,
        //     googleId: profile.id
        // }).save().then((newUser) =>{
        //     console.log('new user created'+ newUser);
        // });


        //check if user already exists in db

        User.findOne({ googleId: profile.id }).then((currentUser) => {
            if (currentUser) {
                console.log('user is:', currentUser);
                done(null, currentUser);
            } else {
                new User({
                    username: profile.displayName,
                    googleId: profile.id
                }).save().then((newUser) =>{
                    console.log('new user created'+ newUser);
                    done(null, newUser);
                });
            }
        });


    })
)