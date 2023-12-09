const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },
  verify_code: {
    type: String,
  },
  verify_code_expire: {
    type: Date,
  },
});

// Create the model
const User = mongoose.model("User", userSchema);

module.exports = User;
