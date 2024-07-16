const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/student");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");

app.use("/", router);

mongoose.connect("mongodb://127.0.0.1:27017/studentManagement").then(() => {
  console.log("database is conected");
});

app.listen(3000, () => {
  console.log("server is connected");
});
