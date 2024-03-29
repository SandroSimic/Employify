import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: [true, "CompanyName is required"],
  },
  companyDescription: {
    type: String,
    required: [true, "Company description is required"],
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
    unique: true,
  },
  jobs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
    },
  ],
  companyImage: {
    type: String,
    required: [true, "Please provide a image"],
  },
});

const Company = mongoose.model("Company", companySchema);
export default Company;
