const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
    unique: true,
  },
  name: String,
  email: String,
  photo: String,
});

const User = mongoose.model("User", userSchema);
module.exports = User;
