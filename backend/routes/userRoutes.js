import express from "express";
import { register, login } from "../controllers/authController.js";
import { compressImage, upload } from "../utils/uploadImage.js";

const router = express.Router();

router.route("/login").post(login);
router
  .route("/register")
  .post(upload.single("userImage"), compressImage, register);

export default router;
