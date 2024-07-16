const { create } = require("domain");
const student = require("../models/student");

module.exports = {
  index: (req, res) => {
    res.render("student");
  },
  create: async (req, res) => {
    await student.create(req.body);
  },
};
