import Applicant from "../models/applicantModel.js";
import Job from "../models/jobModel.js";
import User from "../models/userModel.js";
import AppError from "../utils/appError.js";
import catchAsync from "../utils/catchAsync.js";
import { s3Upload } from "../utils/s3Service.js";

const applyToJob = catchAsync(async (req, res, next) => {
  const { jobId } = req.params;
  const userId = req.user._id;
  console.log(userId);
  const user = await User.findById(userId);

  const existingApplicant = await Applicant.findOne({
    user: userId,
    job: jobId,
  });

  if (existingApplicant) {
    return next(new AppError("You have already applied for this job", 401));
  }

  console.log(req.file);
  if (!req.file || !req.file.buffer) {
    return next(new AppError("Please provide a CV", 400));
  }

  console.log(req.file);
  const data = await s3Upload(req.file);

  const applicant = await Applicant.create({
    user: user._id,
    job: jobId,
    userCV: data.Location,
    userMessage: req.body.userMessage,
    isApplied: true,
  });

  const job = await Job.findByIdAndUpdate(
    jobId,
    {
      $push: { applicants: applicant },
    },
    { new: true }
  ).populate("applicants");

  if (!job) {
    return next(new AppError("No job found with that ID", 404));
  }

  res.status(200).json({
    job,
  });
});

const getApplicants = catchAsync(async (req, res, next) => {
  const applicants = await Applicant.find()
    .populate({ path: "job", select: "-description" })
    .populate("user");
  const numOfApplicants = await Applicant.countDocuments();

  if (applicants.length === 0 || !applicants) {
    return next(new AppError("No Applicants found", 404));
  }

  res.status(200).json({ applicants, numOfApplicants });
});

const getApplicantsForJob = catchAsync(async (req, res, next) => {
  console.log(req.user);
  const companyId = req.user.companyId;

  if (!companyId) {
    return next(new AppError("User does not belong to any company", 404));
  }

  const jobIds = await Job.find({ companyId: companyId }).distinct("_id");

  const applicants = await Applicant.find({ job: { $in: jobIds } })
    .populate({ path: "job", select: "-description" })
    .populate("user");

  if (applicants.length === 0 || !applicants) {
    return next(new AppError("No Applicants found", 404));
  }

  res.status(200).json({ applicants });
});

export { applyToJob, getApplicants, getApplicantsForJob };
