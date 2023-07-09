const {
    createBooking,
    getAllBookings
}=require("../controllers/bookingController")

const express = require("express");
const { isAuthenticatedUser } = require("../middleware/auth");
const router = express.Router();

// http://localhost:3000/api/booking/---------
router.route("/create").post(isAuthenticatedUser,createBooking);
router.route("/").get(isAuthenticatedUser,getAllBookings);

module.exports = router;