const mongoose = require("mongoose");
const validator = require("validator");
const ErrorHandler = require("../utils/errorHandler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const axios = require("axios");

//crypto is a built in module
const crypto = require("crypto");

const organizationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter name of your organization"],
    maxLength: [40, "Name cannot exceed 40 characters"],
    minLength: [3, "Name should atleast have 3 characters"],
  },
  type: {
    type: String,
    required: [true, "Please enter type of your organization"],
    maxLength: [20, "Type cannot exceed 30 characters"],
    minLength: [3, "Type should atleast have 3 characters"],
  },
  contactPerson: {
    type: String,
    required: [true, "Please enter name of the contact person"],
    maxLength: [40, "Name cannot exceed 40 characters"],
    minLength: [3, "Name should atleast have 3 characters"],
  },
  email: {
    type: String,
    required: [true, "Please enter email of the contact person"],
    unique: true,
    validate: [validator.isEmail, "Please enter a valid email"],
  },
  phone: {
    type: Number,
    required: [true, "Please enter phone number of the contact person"],
    maxLength: [10, "Phone number cannot exceed 10 characters"],
  },
  address: {
    houseNo: {
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
    },
  },
  location: {
    type: {
      type: String,
      enum: ["Point"],
      default: "Point",
    },
    coordinates: {
      type: [Number],
    },
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    minLength: [8, "Password should at least have 8 characters"],
    select: false,
  },
  website: {
    type: String,
    validate: [validator.isURL, "Please enter a valid URL"],
  },
  moto: {
    type: String,
  },
  certificate: {
    type: String,
  },
  termsAndConditions: {
    type: String,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});
organizationSchema.index({ location: "2dsphere" });
//update the coordinates using geocoder
organizationSchema.pre("save", async function (next) {
  const endPoint = "https://www.mapquestapi.com/geocoding/v1/address";
  const apiKey = process.env.MAPQUEST_API_KEY;
  const address = `${this.address.houseNo}, ${this.address.city}, ${this.address.state}, ${this.address.country}`;
  const url = `${endPoint}?key=${apiKey}&location=${encodeURIComponent(address)}`;
  const response = await axios.get(url);
  const results = response.data.results;
  if (results && results.length > 0) {
    const location = results[0].locations[0];
    const latitude = location.latLng.lat;
    const longitude = location.latLng.lng;
    this.location.coordinates = [longitude,latitude];
    next();
  }else{
    next(new ErrorHandler("Please enter email and password", 400));
  }
})

//Encrypting password before saving user
organizationSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    }
);

//compare user password
organizationSchema.methods.comparePassword = async function (enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
};

//jwt token is generated
organizationSchema.methods.getJWTToken = function(){
    return jwt.sign({id: this._id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    })
}

//generating password reset token 
organizationSchema.methods.getResetPasswordToken = function(){
    const resetToken = crypto.randomBytes(20).toString("hex");
    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");

    this.resetPasswordExpire= Date.now() + 15 * (60 * 1000);
    return resetToken;
}

module.exports = mongoose.model("Organization", organizationSchema);