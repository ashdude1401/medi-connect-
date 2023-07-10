const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());

//Importing Routes
const userRoute = require("./routes/userRoute");
const orgRoute = require("./routes/organizationRoute");
const bookingRoute = require("./routes/bookingRoute");

app.use("/api", userRoute);
app.use("/api/organization", orgRoute);
app.use("/api/booking", bookingRoute);
//Middleware for Errors
const errorMiddleware = require("./middleware/error");
app.use(errorMiddleware);

module.exports = app; 