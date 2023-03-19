const express = require("express");

const mainController = require("../controller/controller");

const router = express.Router();

router.get("/add-product", mainController.add_productFile);

router.post("/product", mainController.add_product);

module.exports = router;
