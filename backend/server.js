const express = require("express");
const cors = require("cors");
const logger = require("morgan");
require("dotenv").config();
const bodyParser = require("body-parser");

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(logger("tiny"));
app.use(express.static("files"));

// DB connection
const connectDB = require("./db/conn");
connectDB();

// Routes
const router = require("./routes");
app.use(router);

// Server Listen
const PORT = process.env.PORT || process.env.NODE_PORT;
app.listen(PORT, () => {
  console.log("server listening on port", PORT);
});
