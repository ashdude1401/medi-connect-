const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");
const http = require("http");
const server = http.createServer(app);
const {Server} = require("socket.io");
const cors = require("cors");
app.use(cors());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
//Handling Uncaught Exception - for eg console.log(object) when object is not defined
process.on("uncaughtException", (err) => {
    console.log((`Error: ${err.message}`));
    console.log("Shutting down the server due to uncaught exception");
    process.exit(1);
})


//Config
dotenv.config({path: "backend/config/.env"});

//Connecting to database
connectDatabase();

server.listen(process.env.PORT, () => {
    console.log(`Server is running on https://localhost:${process.env.PORT}`);
});

//Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server due to unhandled promise rejection");

    server.close(() => {
        process.exit;
    })
});