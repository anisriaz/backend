// database.js
const mongoose = require('mongoose');

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
  }
};

module.exports = connectToMongoDB;



































// const mongoose = require("mongoose");

// // Database connection


// mongoose
// .connect(process.env.mongoUrl)
//   .then(() => console.log("Connected to MongoDB"))
//   .catch(err => {
//     console.log("Failed to connect to MongoDB");
//     exit(0);
//   });



//   module.exports = connectToMongoDB;