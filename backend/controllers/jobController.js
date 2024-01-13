import mongoose from "mongoose";
import Job from "../models/jobModel.js";
import AppError from "../utils/appError.js";
import catchAsync from "../utils/catchAsync.js";

const createJob = catchAsync(async (req, res, next) => {
  const {
    companyName,
    position,
    location,
    salary,
    monthly,
    fullTime,
    description,
  } = req.body;

  const newJob = await Job.create({
    companyName,
    position,
    location,
    salary: parseInt(salary),
    monthly: Boolean(monthly),
    fullTime: Boolean(fullTime),
    description,
  });

  res.status(200).json({ newJob });
});

const getJobs = catchAsync(async (req, res, next) => {
  const jobs = await Job.find();

  if (jobs.length === 0 || !jobs) {
    return res.status(404).json({ message: "No job found" });
  }

  res.status(200).json(jobs);
});

const getJobById = async (req, res) => {
  const { id } = req.params;
  const job = await Job.findById(id);

  if (!job) {
    return res.status(404).json({ message: "No job with this ID" });
  }

  res.status(200).json(job);
};

const updateJob = catchAsync(async (req, res, next) => {
  const {
    companyName,
    position,
    location,
    salary,
    monthly,
    fullTime,
    description,
  } = req.body;

  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return next(new AppError("Invalid Job Id", 404));
  }

  const existingJob = await Job.findById(id);

  if (!existingJob) {
    return next(new AppError("The job does not exist", 404));
  }

  let updatedJobData = {
    companyName,
    position,
    location,
    salary,
    monthly,
    fullTime,
    description,
  };

  const updatedJob = await Job.findByIdAndUpdate(id, updatedJobData, {
    new: true,
    runValidators: true,
  });

  if (!updatedJob) {
    return next(new AppError("Job not found", 404));
  }

  res.status(200).json({ updatedJob });
});

const deleteJob = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return next(new AppError("Invalid Job Id", 404));
  }

  const job = await Job.findByIdAndDelete(id);

  if (job) {
    res.status(200).json({ message: "Deleted Job" });
  } else {
    return next(new AppError("No job found with that id", 404));
  }
});

export { getJobs, getJobById, updateJob, deleteJob, createJob };
