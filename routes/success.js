const express = require("express");
const mainController = require("../controller/controller");

const router = express.Router();

router.get("/success", mainController.successFile);

module.exports = router;
