import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: [true, "User with that username already exists"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "User with that email already exists"],
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: [6, "Minimum length for password is 6 letters"],
  },
  userImage: {
    type: String,
    required: [true, "Please provide a image"],
  },
  role: {
    type: String,
    enum: ["employee", "employer", "admin"],
    default: "employee",
  },
  companyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
  },
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  if (!this.password) {
    return false; // Handle case where password is not defined
  }
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);
export default User;
