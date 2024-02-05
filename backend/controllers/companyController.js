import mongoose from "mongoose";
import AppError from "../utils/appError.js";
import catchAsync from "../utils/catchAsync.js";
import Company from "../models/companyModel.js";
import { s3Upload } from "./../utils/s3Service.js";
import User from "../models/userModel.js";

const getCompanies = catchAsync(async (req, res, next) => {
  const companies = await Company.find().populate("jobs");

  if (companies.length === 0 || !companies) {
    return res.status(404).json({ message: "No companies found" });
  }

  res.status(200).json(companies);
});

const createCompany = catchAsync(async (req, res, next) => {
  const { companyName, companyDescription } = req.body;

  if (!req.file || !req.file.buffer) {
    return next(new AppError("Please provide a profile image", 400));
  }

  const data = await s3Upload(req.file);
  console.log(data);
  const newCompany = await Company.create({
    companyName,
    companyDescription,
    owner: req.user._id,
    companyImage: data.Location,
  });

  await User.findByIdAndUpdate(
    req.user._id,
    { companyId: newCompany._id },
    { new: true }
  );

  res.status(200).json({
    newCompany,
  });
});

const getCompanyById = catchAsync(async (req, res, next) => {
  const companyId = req.params.companyId;

  const company = await Company.findById(companyId).populate("jobs");

  if (company.length === 0 || !company) {
    return res.status(404).json({ message: "No company found" });
  }

  res.status(200).json(company);
});

export { getCompanies, createCompany, getCompanyById };
