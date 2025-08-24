var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const {
  CustomErrorMiddleware,
} = require("./utils/errorHandlers/CustomErrorMiddleware");

var indexRouter = require("./routes/index");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/v1", indexRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(CustomErrorMiddleware); // Use custom error middleware
module.exports = app;
