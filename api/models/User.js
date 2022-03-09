const mongoose = require("mongoose");

// User Schema
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 3,
      max: 30,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    title: {
      type: String,
      default: "",
    },
    position: {
      type: String,
      default: "",
    },
    location: {
      type: String,
      max: 50,
    },
    followers: {
      type: Array,
      default: [],
    },
    following: {
      type: Array,
      default: [],
    },
    commonFriends: {
      type: Number,
      default: 0,
    },
    firstFriend: {
      type: String,
      default: "",
    },
    secondFriend: {
      type: String,
      default: "",
    },
    profilePicture: {
      type: String,
      default: "",
    },
    coverImage: {
      type: String,
      default: "",
    },
    relationship: {
      type: Number,
      enum: [1, 2, 3],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);