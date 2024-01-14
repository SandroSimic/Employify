import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    salaryType: {
      type: String,
      enum: ["monthly", "yearly"],
      required: [true, "Salary type is required"],
      default: "monthly",
    },
    jobType: {
      type: String,
      enum: ["full-time", "part-time"],
      required: [true, "JobType is required"],
      default: "full-time",
    },
    description: {
      type: String,
      required: [true, "Description of the job is required"],
    },
    category: {
      type: String,
      enum: [
        "Design & Development",
        "Marketing & Communication",
        "Digital Marketing",
        "Business & Consulting",
        "Finance Management",
        "Healthcare",
        "Fitness and Wellness",
        "Education",
        "Customer Service Care",
      ],
      required: [true, "Category for a job is required"],
    },
    applicants: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.model("Job", jobSchema);
export default Job;
