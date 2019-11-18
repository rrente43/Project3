const express = require("express");
const authRoutes =require('./routes/auth-routes');
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
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(routes);

app.use(passport.initialize());
app.use(passport.session());

app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]

}));

app.use("/auth", authRoutes);

const authCheck = (req, res, next) => {
  if (!req.user) {
    res.status(401).json({
      authenticated: false,
      message: "user has not been authenticated"
    });
  } else {
    next();
  }
};

app.get("/", authCheck, (req, res) => {
  res.status(200).json({
    authenticated: true,
    message: "user successfully authenticated",
    user: req.user,
    cookies: req.cookies
  });
});


// Connect to the Mongo DB

var MONGODB_URI =process.env.MONGODB_URI || "mongodb://localhost/projectSchema";
mongoose.connect(MONGODB_URI);
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
mongoose.connect(keys.mongodb.dbURI,()=>{
  console.log('connected to mongodb');
});