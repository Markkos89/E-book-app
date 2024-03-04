const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  createdAt: { type: String, required: true },
  path: { type: String, required: true },
  description: { type: String, required: false, default: "" },
});

const File = mongoose.model("File", fileSchema);

module.exports = File;
