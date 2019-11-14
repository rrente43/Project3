const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  UserName: { type: String, required: true },
  // Password: { type: String, required: true },
  // FirstName: { type: String, required: true },
  // LastName: { type: String, required: true },
  // DOB: { type: String, required: true },
  // Gender: { type: String, required: true },
  // Email: { type: String, required: true },
  // date: { type: Date, default: Date.now }
});

const Users = mongoose.model("Users", projectSchema);

module.exports = Users;
