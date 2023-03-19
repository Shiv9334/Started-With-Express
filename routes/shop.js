const express = require("express");

const mainController = require("../controller/controller");

const router = express.Router();

router.get("/", mainController.shopFile);

module.exports = router;
