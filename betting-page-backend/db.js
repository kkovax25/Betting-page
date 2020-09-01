require("dotenv").config();
const mongoose = require('mongoose');
const db = process.env.MONGODB_URI

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    })
    console.log('MongoDB Connected...'.blue.bold.italic);

  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }

}

module.exports = connectDB;