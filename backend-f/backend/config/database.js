const mongoose = require("mongoose");

const connectDatabase = () => {
  console.log("test");
  mongoose
    .connect(
      "mongodb+srv://anurag123:anurag123@store-api.8jwbbe8.mongodb.net/"
    )
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    })
    .catch((e) => console.error(e))
    .finally(() => {
      console.log("test2");
    });
};

module.exports = connectDatabase;
