import express from "express";
import {
  createJob,
  deleteJob,
  getJobById,
  getJobs,
  getTopJobs,
  updateJob,
} from "../controllers/jobController.js";
import { protect, restrictTo } from "../middleware/authMiddleware.js";
import { applyToJob } from "../controllers/applicantController.js";
import { uploadPdf } from "../utils/uploadImage.js";

const router = express.Router();

router.route("/").get(getJobs).post(protect, restrictTo("employer"), createJob);
router.route("/top-jobs").get(getTopJobs);
router
  .route("/apply/:jobId")
  .patch(
    protect,
    restrictTo("employee"),
    uploadPdf.single("userCV"),
    applyToJob
  );
router
  .route("/:id")
  .get(getJobById)
  .patch(protect, restrictTo("employer"), updateJob)
  .delete(protect, restrictTo("employer"), deleteJob);

export default router;
