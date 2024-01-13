import express from "express";
import dotenv from "dotenv";
import jobRouter from "./routes/jobRoutes.js";
import userRouter from "./routes/userRoutes.js";
import connectDB from "./config/db.js";
import globalErrorHandler from "./controllers/errorController.js";

dotenv.config();

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 8000;

app.use("/api/jobs", jobRouter);
app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.send("Getting Api");
});

app.use(globalErrorHandler);

app.listen(port, (req, res) => {
  console.log(`Server Running on port ${port}`);
});
