const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const router = require("./routes");
require("dotenv").config();

const app = express();

// Middlewares
app.use(cors());
app.use(logger("tiny"));
app.use(express.static("files"));

app.use(router);

const PORT = process.env.NODE_PORT;
console.log({ PORT });
app.listen(PORT);
console.log("Server on port " + PORT);
