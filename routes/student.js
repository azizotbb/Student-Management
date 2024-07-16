const router = require("express").Router();
const studentController = require("../controllers/student");

router.get("/", studentController.index);
router.post("/crate", studentController.create);

module.exports = router;
