const express = require("express");
const Multer = require("multer");
const router = express.Router();

const moment = require("moment");
const File = require("../models/fileSchema");

const cloudinary = require("../helper/cloudinaryConfig");

const storage = new Multer.memoryStorage();
const upload = Multer({
  storage,
});

router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
    const res = await cloudinary.uploader.upload(dataURI, {
      resource_type: "auto",
    });
    console.log({ res });
    const { name, description } = req.body;

    const createdAt = moment(new Date()).format("YYYY-MM-DD");

    const file = await File.create({
      name,
      path: upload.secure_url,
      createdAt,
      description,
    });

    return res.status(200).json({
      msg: "send",
      file,
      status: true,
    });
  } catch (err) {
    console.log({ err });
    return res.status(200).json({
      msg: err.message,
      error: "error",
      status: false,
    });
  }
});

// user data
router.get("/files", async (req, res) => {
  try {
    const files = await File.find();

    return res.status(200).json({
      msg: "files",
      status: true,
      files,
    });
  } catch (err) {
    return res.status(200).json({
      msg: err.message,
      error: "error",
      status: false,
    });
  }
});

// delete user data
router.post("/delete", async (req, res) => {
  try {
    const { id } = req.body;
    // console.log("id",id);

    const file = await File.findByIdAndDelete(id);

    return res.status(200).json({
      msg: "file",
      status: true,
      file,
    });
  } catch (err) {
    return res.status(200).json({
      msg: err.message,
      error: "error",
      status: false,
    });
  }
});

module.exports = router;
