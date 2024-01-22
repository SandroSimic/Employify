import mongoose from "mongoose";
import User from "../models/userModel.js";
import AppError from "../utils/appError.js";
import catchAsync from "../utils/catchAsync.js";
import generateToken from "../utils/generateToken.js";
import { s3Upload } from "../utils/s3Service.js";

const register = catchAsync(async (req, res, next) => {
  const { username, email, role, password } = req.body;


  if(!username || !email || !password || !role) {
    return next(new AppError("Please provide all fields", 400));
  }

  if (!req.file || !req.file.buffer) {
    return next(new AppError("Please provide a profile image", 400));
  }

  const data = await s3Upload(req.file);
  console.log(data);
  const user = await User.create({
    username,
    email,
    password,
    role,
    userImage: data.Location,
  });

  const newUser = await user.save();
  generateToken(res, newUser._id);
  res.status(200).json({ newUser });
});

const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  console.log(user);
  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(200).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
    });
  } else {
    return next(new AppError("Email or Password is incorrect", 401));
  }
});
export { register, login };
