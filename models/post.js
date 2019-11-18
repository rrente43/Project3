var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var PostSchema = new Schema({
  fullName: {
    type: String,
    trim: true,
    required: "fullName is Required"
  }, 
  // `email` must be of type String
  // `email` must be unique
  // `email` must match the regex pattern below and throws a custom error message if it does not
  // You can read more about RegEx Patterns here https://www.regexbuddy.com/regex.html
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  age: {
    type: String,
    trim: true,
    required: "age is Required"
  },  
  gender: {
    type: String,
    trim: true,
    required: "gender is Required",
    validate: [
      function(input){
        return input.length >= 6;
      }, 
      "Must be 'Male', 'Female', 'Other'"
    ]
  }, 
  pets: {
    type: String,
    trim: true
  },
  occupation: {
    type: String,
    trim: true,
    required: "Please enter your occupation"
  },
  
  
  // `date` must be of type Date. The default value is the current date
  userCreated: {
    type: Date,
    default: Date.now
  }
});

// This creates our model from the above schema, using mongoose's model method
var Post = mongoose.model("Post", PostSchema);

// Export the User model
module.exports = Post;