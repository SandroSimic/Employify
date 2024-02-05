import express from "express";
import dotenv from "dotenv";
import jobRouter from "./routes/jobRoutes.js";
import userRouter from "./routes/userRoutes.js";
import companyRouter from "./routes/companyRoutes.js";
import applicantRouter from "./routes/applicantRoutes.js";
import connectDB from "./config/db.js";
import globalErrorHandler from "./controllers/errorController.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";


dotenv.config();

connectDB();

const app = express();

app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173", "https://employify.onrender.com"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/jobs", jobRouter);
app.use("/api/users", userRouter);
app.use("/api/companies", companyRouter);
app.use("/api/applicant", applicantRouter);

const __dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}

app.use(globalErrorHandler);

const port = process.env.PORT || 8000;
app.listen(port, (req, res) => {
  console.log(`Server Running on port ${port}`);
});
