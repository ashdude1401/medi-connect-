const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose.connect(process.env.MONGO_URI).then((data) => {
    console.log(`Mongodb connected with server: ${data.connection.host}`);
  }).catch(e=>console.error(e));
};

module.exports = connectDatabase;
