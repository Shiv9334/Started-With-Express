const express = require("express");

const router = express.Router();

const mainController = require("../controller/controller");

router.get("/contactUs", mainController.contectUsFile);

router.post("/form", mainController.contectUs);

module.exports = router;
