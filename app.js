const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

// require router
const ActorRoute = require("./routes/actor.route");
const CustomerRoute = require("./routes/customer.route");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/actors", ActorRoute);
app.use("/api/customers", CustomerRoute);

app.use(function (err, req, res, next) {
  console.log(err);
  res.status(500).render("500");
});

module.exports = app;
