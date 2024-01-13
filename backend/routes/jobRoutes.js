import express from "express";
import {
  createJob,
  deleteJob,
  getJobById,
  getJobs,
  updateJob,
} from "../controllers/jobController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(protect, getJobs).post(createJob);
router.route("/:id").get(getJobById).patch(updateJob).delete(deleteJob);

export default router;
