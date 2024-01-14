import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import { jobs } from "../data/jobs.js";
import Job from "../models/jobModel.js";
import connectDB from "./../config/db.js";

connectDB();

const importData = async () => {
  try {
    await Job.deleteMany();

    const sampleJobs = jobs.map((job) => {
      return { ...job };
    });

    await Job.insertMany(sampleJobs);

    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Job.deleteMany();

    console.log("Data Destroyed!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
