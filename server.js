const express = require("express");
const authRoutes =require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');

const mongoose = require("mongoose");
const keys = require('./config/keys');

const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use('/auth', authRoutes);
// app.use(routes);

// Connect to the Mongo DB
var MONGODB_URI =process.env.MONGODB_URI || "mongodb://localhost/projectSchema";
mongoose.connect(MONGODB_URI);
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

// const express = require("express");

// const mongoose = require("mongoose");
// const routes = require("./routes");
// const app = express();
// const PORT = process.env.PORT || 3001;

// // Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
// // Add routes, both API and view
// app.use(routes);

// // Connect to the Mongo DB
// var MONGODB_URI =process.env.MONGODB_URI || "mongodb://localhost/projectSchema";
// mongoose.connect(MONGODB_URI);
// // Start the API server
// app.listen(PORT, function() {
//   console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
// });
