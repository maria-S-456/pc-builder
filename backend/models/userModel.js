const mongoose = require('mongoose');
const bcrypt = require("bcrypt")

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Name is required"]
  },
  email: {
    type: String,
    required: [true, "Email is required"]
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [8, "Password must be 8 characters or longer"]
  },
  selectedParts: [{
    type: String
  }]
}, {timestamps: true});

const User = mongoose.model("users", UserSchema)
module.exports = User
