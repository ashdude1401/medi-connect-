const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const axios = require("axios");
require("dotenv").config();
//crypto is a built in module
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
    maxLength: [30, "Name cannot exceed 30 characters"],
    minLength: [4, "Name should atleast have 3 characters"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
    validate: [validator.isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    minLength: [8, "Password should atleast have 8 characters"],
    select: false, //whenever User is called, password must not be returned
  },
  address: {
    houseNo:{
        type: String,
        required: [true, "Please enter your house number with road name"],
    },
    pincode: {
      type: Number,
      required: [true, "Please enter your pincode"],
      maxLength: [6, "Pincode cannot exceed 6 characters"],
      minLength: [6, "Pincode should atleast have 6 characters"],
    },
    city: {
      type: String,
      required: [true, "Please enter your city"],
    },
    state: {
      type: String,
      required: [true, "Please enter your state"],
    },
    country: {
      type: String,
      required: [true, "Please enter your country"],
    }
  },
  location:{
      type: {
        type:String,
        enum:["Point"],
        default:"Point",
      },
      coordinates:{
        type:[Number],
      }
  },
  phone:{
    type: Number,
    required: [true, "Please enter your phone number"],
    maxLength: [10, "Phone number cannot exceed 10 characters"],
  },
  role: {
    type: String,
    default: "user",
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});
userSchema.index({location:"2dsphere"});
//saving the coordinates from the address in location field

userSchema.pre("save", async function (next) {
  const endPoint = "https://www.mapquestapi.com/geocoding/v1/address";
  const apiKey = process.env.MAPQUEST_API_KEY;
  const address = `${this.address.houseNo}, ${this.address.city}, ${this.address.state}, ${this.address.pincode}`;
  const url = `${endPoint}?key=${apiKey}&location=${encodeURIComponent(address)}`;
  const response = await axios.get(url);
  const results = response.data.results;
  if (results && results.length > 0) {
    const location = results[0].locations[0];
    const latitude = location.latLng.lat;
    const longitude = location.latLng.lng;
    this.location.coordinates = [longitude, latitude];
    next();
  }else{
    next(new ErrorHandler("Please enter email and password", 400));
  }
})

userSchema.pre("save", async function (next) {
  //while we are updating profile, we dont want the password to be hashed again so we check if the password hasnt been modified
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

//JWT Token - A token is generated and is stored inside a cookie. This token helps the server to know that the user can access the routes
userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

//Compare Password
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

//Generating password reset token
userSchema.methods.getResetPasswordToken = function () {
  //Generating token
  const resetToken = crypto.randomBytes(20).toString("hex");

  //Hashing and adding to userSchema
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  //the token will expire after 15 minutes
  this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

  return resetToken;
};

module.exports = mongoose.model("User", userSchema);
