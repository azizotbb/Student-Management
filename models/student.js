const mongoose = require("mongoose");
const { type } = require("os");

const studentSchema = mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
});

const student = mongoose.model("student", studentSchema);

module.exports = student;
