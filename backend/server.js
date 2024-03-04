const express = require("express");
const cors = require("cors");
const logger = require("morgan");
require("dotenv").config();

const app = express();

// Middlewares
app.use(cors());
app.use(logger("tiny"));
app.use(express.static("files"));

// db connection
const connectDB = require("./db/conn");
connectDB();

const router = require("./routes");
app.use(router);

const PORT = process.env.NODE_PORT;
app.listen(PORT, () => {
  console.log("server listening on port", PORT);
});
