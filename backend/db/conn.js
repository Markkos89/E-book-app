const mongoose = require("mongoose");
require("dotenv").config();

const DB = process.env.NODE_MONGO_URI;

const connectDB = async () => {
  try {
    const db = await mongoose.connect(DB);
    console.log("DB connection established");
  } catch (err) {
    console.log("DB connection error", { err });
  }
};

module.exports = connectDB;
