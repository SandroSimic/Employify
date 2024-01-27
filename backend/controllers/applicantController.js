import Applicant from "../models/applicantModel.js";
import Job from "../models/jobModel.js";
import User from "../models/userModel.js";
import AppError from "../utils/appError.js";
import catchAsync from "../utils/catchAsync.js";

const applyToJob = catchAsync(async (req, res, next) => {
  const { jobId } = req.params;
  const user = await User.findById(req.user._id);

  const isApplied = await Job.findOne({
    _id: jobId,
    "applicants.user": user._id,
  });

  if (isApplied) {
    return next(new AppError("You have already applied for this job", 401));
  }

  const applicant = await Applicant.create({
    user: user._id,
    job: jobId,
    userCV: req.body.userCV,
    userMessage: req.body.userMessage,
  });

  const job = await Job.findByIdAndUpdate(
    jobId,
    {
      $push: { applicants: applicant._id },
    },
    { new: true }
  );

  if (!job) {
    return next(new AppError("No job found with that ID", 404));
  }

  res.status(200).json({
    job,
  });
});

export { applyToJob };
