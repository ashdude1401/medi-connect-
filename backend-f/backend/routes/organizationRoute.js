const {
  registerOrganization,
  login,
  logout,
  forgotPassword,
  resetPassword,
  getUserDetails,
  changePassword,
  updateProfile,
  getNearestMedicine,
  donateMedicine
} = require("../controllers/organizationController");

const express = require("express");
const { isAuthenticatedOrg } = require("../middleware/auth");
const router = express.Router();

// http://localhost:3000/api/organization/---------
router.route("/register").post(registerOrganization);
router.route("/login").post(login);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/password/change").put(isAuthenticatedOrg, changePassword);
router.route("/me").get(isAuthenticatedOrg, getUserDetails);
router.route("/me/update").put(isAuthenticatedOrg, updateProfile);
router.route("/logout").get(logout);

router.route("/nearestMedicine").get(isAuthenticatedOrg,getNearestMedicine);
router.route("/donateMedicine").get(isAuthenticatedOrg,donateMedicine);
module.exports = router;
