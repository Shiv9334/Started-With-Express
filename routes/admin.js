const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  console.log("add-product");
  res.send(
    '<form action="/admin/product" method ="POST"><input type="text" name ="title"><button type = "submit">Add product</button></input></form> '
  );
});

router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/shop");
});

module.exports = router;
