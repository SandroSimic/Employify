import express from "express";
import {
  getApplicants,
  getApplicantsForJob,
} from "../controllers/applicantController.js";
import { protect, restrictTo } from "../middleware/authMiddleware.js";

const router = express.Router();
router.route("/").get(getApplicants);
router.route("/applicants-for-user-company").get(protect, getApplicantsForJob);

export default router;
