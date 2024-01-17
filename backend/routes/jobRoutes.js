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

const router = express.Router();

router.route("/").get(getJobs).post(protect, restrictTo("employer"), createJob);
router.route("/top-jobs").get(getTopJobs);
router.route("/:id").get(getJobById).patch(updateJob).delete(deleteJob);

export default router;
