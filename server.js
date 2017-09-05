const express = require("express");
const path = require("path");
const logger = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bluebird = require("bluebird");

const indexRoutes = require("./routes/indexRoutes");
const customerRoutes = require("./routes/itemRoutes");
const vendorRoutes = require("./routes/transactionRoutes");

const app = express();

mongoose.Promise = bluebird;
mongoose.connect("mongodb://localhost:27017/vendingmachine");

app.use(logger("dev"));
app.use(bodyParser.json());

app.use("/", indexRoutes);
app.use("/api/customer", customerRoutes);
app.use("/api/vendor", vendorRoutes);

module.exports = app;
