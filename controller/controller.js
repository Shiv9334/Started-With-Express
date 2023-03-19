const path = require("path");
const rootdir = require("../util/path");

exports.shopFile = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
};

exports.contectUsFile = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "contactUs.html"));
};

exports.contectUs = (req, res, next) => {
  res.redirect("/success");
};

exports.add_productFile = (req, res, next) => {
  res.sendFile(path.join(rootdir, "views", "add-products.html"));
};

exports.add_product = (req, res, next) => {
  console.log(req.body);
  res.redirect("/shop");
};

exports.successFile = (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "success.html"));
};

exports.errorPage = (req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "..", "views", "404.html"));
};
