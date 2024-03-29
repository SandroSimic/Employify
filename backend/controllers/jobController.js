import mongoose from "mongoose";
import Job from "../models/jobModel.js";
import AppError from "../utils/appError.js";
import catchAsync from "../utils/catchAsync.js";
import Company from "../models/companyModel.js";

const createJob = catchAsync(async (req, res, next) => {
  const {
    position,
    location,
    salary,
    salaryType,
    jobType,
    description,
    category,
    experience,
  } = req.body;

  const userId = req.user._id;
  const companyId = req.user.companyId;

  const newJob = await Job.create({
    companyId,
    userId,
    position,
    location,
    salary: parseInt(salary),
    salaryType,
    jobType,
    description,
    category,
    experience,
  });

  await Company.findByIdAndUpdate(
    companyId,
    { $push: { jobs: newJob._id } },
    { new: true }
  );

  res.status(200).json({ newJob });
});

const getJobs = catchAsync(async (req, res, next) => {
  // Build Query
  const queryObj = { ...req.query };
  const excludedFields = ["page", "limit", "search"];
  excludedFields.forEach((el) => {
    delete queryObj[el];
  });

  if (req.query.search) {
    queryObj.position = { $regex: new RegExp(req.query.search, "i") };
  }

  if (req.query.location) {
    queryObj.location = { $regex: new RegExp(req.query.location, "i") };
  }
  if (req.query.salaryType) {
    queryObj.salaryType = { $regex: new RegExp(req.query.salaryType, "i") };
  }
  if (req.query.category) {
    queryObj.category = { $regex: new RegExp(req.query.category, "i") };
  }

  let query = Job.find(queryObj)
    .populate({
      path: "companyId",
      select: "-jobs",
    })
    .populate("applicants");

  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 100;
  const skip = (page - 1) * limit;

  const numJobs = await Job.countDocuments(queryObj);

  query = query.skip(skip).limit(limit);

  if (req.query.page) {
    if (skip >= numJobs) {
      return next(new AppError("This Page does not exist", 404));
    }
  }

  const jobs = await query;

  const totalPages = Math.ceil(numJobs / limit);

  if (jobs.length === 0 || !jobs) {
    return next(new AppError("No jobs found", 404));
  }

  // Send Query
  res.status(200).json({ jobs, totalPages });
});

const getJobById = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const job = await Job.findById(id).populate("companyId").populate("applicants");

  if (!job) {
    return next(new AppError("No jobs found with that ID", 404));
  }

  res.status(200).json(job);
});

const updateJob = catchAsync(async (req, res, next) => {
  const {
    position,
    location,
    salary,
    salaryType,
    jobType,
    description,
    category,
    experience,
  } = req.body;

  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return next(new AppError("Invalid Job Id", 404));
  }

  const existingJob = await Job.findById(id);

  if (!existingJob) {
    return next(new AppError("The job does not exist", 404));
  }

  if (
    req.user._id.toString() !== existingJob.userId.toString() &&
    req.user.role !== "admin"
  ) {
    return next(
      new AppError("You don't have permission to update this job", 403)
    );
  }

  let updatedJobData = {
    position,
    location,
    salary,
    salaryType,
    jobType,
    description,
    category,
    experience,
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

  const existingJob = await Job.findById(id);
  console.log(existingJob);
  if (
    req.user._id.toString() !== existingJob.userId.toString() &&
    req.user.role !== "admin"
  ) {
    return next(
      new AppError("You don't have permission to update this job", 403)
    );
  }

  const job = await Job.findByIdAndDelete(id);

  if (job) {
    res.status(200).json({ message: "Deleted Job" });
  } else {
    return next(new AppError("No job found with that id", 404));
  }
});

const getTopJobs = catchAsync(async (req, res, next) => {
  const topJobs = await Job.find()
    .sort({ applicants: -1 })
    .limit(6)
    .populate("companyId");

  res.status(200).json({ topJobs });
});

export { getJobs, getJobById, updateJob, deleteJob, createJob, getTopJobs };
