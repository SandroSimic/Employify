import multer from "multer";
import AppError from "./appError.js";
import sharp from "sharp";

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  if (file.mimetype.split("/")[0] === "image") {
    cb(null, true);
  } else {
    cb(new AppError("File is not of the correct type", 400), false);
  }
};

export const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5000000 },
});

export const compressImage = (req, res, next) => {
  if (!req.file || !req.file.buffer) {
    return next();
  }

  sharp(req.file.buffer)
    .resize({ fit: "inside", width: 500, height: 500 })
    .toBuffer()
    .then((data) => {
      req.file.buffer = data;
      next();
    })
    .catch((err) => {
      console.error("Image compression error:", err);
      next(err);
    });
};
