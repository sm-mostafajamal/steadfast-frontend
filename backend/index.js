const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT;

mongoose
  .connect(process.env.MONGO_URI)
  .then((result) => console.log("connected to database"));

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
