import express from "express";

const app = express();

const port = 8000

app.get("/", (req, res) => {
  res.send("Getting Api");
});

app.listen(port, (req, res) => {
  console.log(`Server Running on port ${port}`);
});
