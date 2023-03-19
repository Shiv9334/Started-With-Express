const express = require("express");

const router = express.Router();

const mainController = require("../controller/controller");

router.use(mainController.errorPage);

module.exports = router;
