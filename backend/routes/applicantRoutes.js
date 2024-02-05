import express from "express";
import {
  deleteApplicant,
  getApplicants,
  getApplicantsForJob,
} from "../controllers/applicantController.js";
import { protect, restrictTo } from "../middleware/authMiddleware.js";

const router = express.Router();
router.route("/").get(getApplicants);
router.route("/applicants-for-user-company").get(protect, getApplicantsForJob);
router
  .route("/:applicantId")
  .delete(protect, restrictTo("employer"), deleteApplicant);
export default router;
