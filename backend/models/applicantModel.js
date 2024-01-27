import mongoose from "mongoose";

const applicantSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  job: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job",
  },
  userCV: {
    type: String,
    required: [true, "CV is required"],
  },
  userMessage: {
    type: String,
    required: [true, "Message is required"],
  },
});
const Applicant = mongoose.model("Applicant", applicantSchema);
export default Applicant