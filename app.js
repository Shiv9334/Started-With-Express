const express = require("express");

const path = require("path");
const rootDir = require("./util/path");

const app = express();

const bodyParser = require("body-parser");

const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");
const contactRoute = require("./routes/contactUs");
const successRoute = require("./routes/success");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use("admin", adminRoute);
app.use(shopRoute);
app.use(contactRoute);
app.use(successRoute);

app.use((req, res, next) => {
  //res.status(404).send("<h1> PAGE nOT Found </h1>");
  //res.sendFile(rootDir, "views", "404.html");
  res.sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(8000);
