const express = require("express");
const authRoutes =require('./routes/auth-routes');
const profileRoutes =require('./routes/profile-routes');
const passportSetup = require('./config/passport-setup');

const mongoose = require("mongoose");
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');

const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]

}));

// init pass

app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);
// app.use(routes);

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/projectSchema");

mongoose.connect(keys.mongodb.dbURI,()=>{
  console.log('connected to mongodb');
});
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
