import express from "express";
import { register, login, logout } from "../controllers/authController.js";
import { compressImage, upload } from "../utils/uploadImage.js";
import { getLoggedInUser } from "../controllers/userController.js";
import { protect } from "./../middleware/authMiddleware.js";

const router = express.Router();

router.route("/login").post(login);
router.post("/logout", logout);
router
  .route("/register")
  .post(upload.single("userImage"), compressImage, register);

router.route("/me").get(protect,getLoggedInUser);

export default router;
