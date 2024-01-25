import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
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
      enum: ["Full-Time", "Part-Time", "Freelance"],
      required: [true, "JobType is required"],
      default: "full-time",
    },
    experience: {
      type: String,
      enum: ["Entry Level", "Mid Level", "Senior Level"],
      required: [true, "Experience is required"],
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
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.model("Job", jobSchema);
export default Job;
