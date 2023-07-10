//importing all the models
const Organization = require("../models/organizationModel");
const Medicine = require("../models/medicineModel");
const User = require("../models/userModel");

//importing all the required utils and packages
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");
const turf = require("@turf/turf");
//Register a user
/**example of req.body
 * name:username,
 * type:NGO,
 * contactPerson:"santosh kumar",
 * email:email,
 * phone:phone,
 * address:{
 *  houseNo:"ramlochanshire street",
 *  pincode:700054,
 *  city:"Kolkata",
 *  state:"West Bengal",
 *  country:"India",
 * },
 * password:password,
 * website:"www.google.com",
 * moto:"We are here to help",
 * certificate:"www.anything.com"
 * termsAndConditions:"anything"
 */

const registerOrganization = catchAsyncErrors(async (req, res, next) => {
  const organization = await Organization.create(req.body);
  sendToken(organization, 200, res);
});
//login organization
const login = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorHandler("Please enter email and password", 400));
  }
  const org = await Organization.findOne({ email: email }).select("+password");
  if (!org) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }
  const isPasswordMatched = await org.comparePassword(password);
  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }

  sendToken(org, 200, res);
});

//logout organization user

const logout = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({
    success: true,
    message: "user logged out",
  });
});
//forgot password
const forgotPassword = catchAsyncErrors(async (req, res, next) => {
  const org = await Organization.findOne({ email: req.body.email });
  if (!org) {
    return next(new ErrorHandler("User not found", 404));
  }
  const resetToken = org.getResetPasswordToken();
  await org.save({ validateBeforeSave: false });

  const resetPasswordUrl = `${req.protocol}://${req.get(
    "host"
  )}/v1/password/reset/${resetToken}`;
  const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested to change your password then please ignore this email`;

  try {
    await sendEmail({
      email: org.email,
      subject: `Password Recovery`,
      message,
    });
    res.status(200).json({
      success: true,
      message: `Email sent to ${org.email} successfully`,
    });
  } catch (error) {
    org.resetPasswordToken = undefined;
    org.resetPasswordExpire = undefined;
    await org.save({ validateBeforeSave: false });
    return next(new ErrorHandler(error.message, 500));
  }
});

//reset password
//Reset password => /api/v1/password/reset/:token
/**
 * @params token
 * @body
 *  password:password
 *  confirmPassword:password
 */

const resetPassword = catchAsyncErrors(async (req, res, next) => {
  //Created hashed token
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const org = await Organization.findOne({
    resetPasswordToken: resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!org) {
    return next(
      new ErrorHandler("Reset password token is invalid or has expired", 400)
    );
  }

  if (req.body.password !== req.body.confirmPassword) {
    return next(new ErrorHandler("Password does not match", 400));
  }

  org.password = req.body.password;
  org.resetPasswordToken = undefined;
  org.resetPasswordExpire = undefined;

  await org.save();

  sendToken(org, 200, res);
});

//get user details
const getUserDetails = catchAsyncErrors(async (req, res, next) => {
  const org = await Organization.findById(req.user.id);
  res.status(200).json({
    success: true,
    org,
  });
});

//update user password
/**
 * @body
 * 
 *
 */
const changePassword = catchAsyncErrors(async (req, res, next) => {
  const org = await Organization.findById(req.user.id).select("+password");
  const isPasswordMatched = await org.comparePassword(req.body.oldPassword);
  if (!isPasswordMatched) {
    return next(new ErrorHandler("Old password is incorrect", 400));
  }
  if (req.body.newPassword !== req.body.confirmPassword) {
    return next(new ErrorHandler("Password does not match", 400));
  }
  org.password = req.body.newPassword;
  await org.save();
  sendToken(org, 200, res);
});

//update profile details
/**
 * @body
 * same as create user except password
 */
const updateProfile = catchAsyncErrors(async (req, res, next) => {
  const {
    name,
    type,
    contactPerson,
    email,
    phone,
    address,
    website,
    moto,
    certificate,
    termsAndConditions,
  } = req.body;
  const newOrgData = {
    name,
    type,
    contactPerson,
    email,
    phone,
    address,
    website,
    moto,
    certificate,
    termsAndConditions,
  };
  const org = await Organization.findByIdAndUpdate(req.user.id, newOrgData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    message: "Profile updated successfully",
    org,
  });
});

//find all the medicine which is nearest to the organization and sort them according to the distance
const getNearestMedicine = catchAsyncErrors(async (req, res, next) => {
  //get the users id from the medicine and get the location of the user
  const org= await Organization.findById(req.user.id);
  const medicineUsers = await Medicine.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "userId",
        foreignField: "_id",
        as: "user",
      },
    },
  ]);

  const userCoordinates = medicineUsers.map(
    (medicine) => medicine.user[0].location.coordinates
  );

  //using turf to find out the distance and sorting accordingly
  const results = userCoordinates.map((coordinates) => {
    
    const distance = turf.distance(
      turf.point(coordinates),
      turf.point(org.location.coordinates)
    );
    return {
      distance,
    };
  });

  results.sort((a, b) => a.distance - b.distance);

  res.status(200).json({
    success: true,
    results,
  });
});

const donateMedicine = catchAsyncErrors(async (req, res, next) => {
  const newMedicineDate = await medicine.create({
    ...req.body,
    uploadedBy: req.user.id,
    donorType:"organization"
  });
  res.status(200).json({
    success: true,
    message: "Medicine donated successfully",
    newMedicineDate,
  });
});

module.exports = {
  registerOrganization,
  login,
  logout,
  forgotPassword,
  resetPassword,
  getUserDetails,
  changePassword,
  updateProfile,
  getNearestMedicine,
  donateMedicine,
};
