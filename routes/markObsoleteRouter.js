const express = require("express");
const router = express.Router();

const markObsoleteController = require("../controllers/markObsoleteController");

router.route("/").post("/", markObsoleteController.markObsolete);

module.exports = router;
