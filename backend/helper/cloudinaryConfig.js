const cloudinary = require("cloudinary").v2;
require("dotenv").config();

const CLOUDINARY_NAME = process.env.NODE_CLOUDINARY_NAME;
const CLOUDINARY_API_KEY = process.env.NODE_CLOUDINARY_API_KEY;
const CLOUDINARY_API_SECRET = process.env.NODE_CLOUDINARY_API_SECRET;

cloudinary.config({
  cloud_name: CLOUDINARY_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

// async function handleUpload(file) {
//   const res = await cloudinary.uploader.upload(file, {
//     resource_type: "auto",
//   });
//   return res;
// }

module.exports = cloudinary;
