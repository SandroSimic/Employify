import express from "express";
import {
  createCompany,
  getCompanies,
  getCompanyById,
} from "../controllers/companyController.js";
import { protect, restrictTo } from "../middleware/authMiddleware.js";
import { upload } from "../utils/uploadImage.js";

const router = express.Router();

router
  .route("/")
  .get(protect, getCompanies)
  .post(
    protect,
    restrictTo("employer"),
    upload.single("companyImage"),
    createCompany
  );

router.route("/:companyId").get(getCompanyById);

export default router;
