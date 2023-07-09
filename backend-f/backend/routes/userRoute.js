const {
  registerUser,
  loginUser,
  logoutUser,
  forgotPassword,
  resetPassword,
  getUserDetails,
  changePassword,
  updateProfile,
  donateMedicine,
  getAllMedicines,
  getNearestOrganization,
} = require("../controllers/userController");

const express = require("express");
const { isAuthenticatedUser } = require("../middleware/auth");
const router = express.Router();

// http://localhost:3000/api/register
router.route("/register").post(registerUser);
// http://localhost:3000/api/login
router.route("/login").post(loginUser);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/password/change").put(isAuthenticatedUser, changePassword);
router.route("/me").get(isAuthenticatedUser, getUserDetails);
router.route("/me/update").put(isAuthenticatedUser, updateProfile);
router.route("/logout").get(logoutUser);

//medicine routes

router.route("/donateMedicine").post(isAuthenticatedUser, donateMedicine);
router.route("/medicine").get(getAllMedicines);
router
  .route("/nearestOrganization")
  .get(isAuthenticatedUser, getNearestOrganization);

module.exports = router;
