const express = require("express");

const path = require("path");
const rootDir = require("./util/path");

const app = express();

const bodyParser = require("body-parser");

const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");
const contactRoute = require("./routes/contactUs");
const successRoute = require("./routes/success");
const errorRoue = require("./routes/error");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use("admin", adminRoute);
app.use(shopRoute);
app.use(contactRoute);
app.use(successRoute);

app.use(errorRoue);

app.listen(8000);
