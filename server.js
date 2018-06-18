var express = require("express");
var path = require("path");

var app = express();
// var routes = require("/index");

// app.use("/static", express.static(path.join(__dirname, "dist"))); // correct one

app.use("/static", function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/bundle.js"));
});

console.log(path.join(__dirname + "/dist/bundle.js"));

// console.log(app.use("/static", express.static(path.join(__dirname, "dist"))));

app.use("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.use("/show", express.static(path.join(__dirname, "dist"))); //?

// app.use("/bundle.js", function(req, res) {
//   res.sendFile(path.join(__dirname + "/dist/bundle.js"));
//   console.log(__dirname + "/dist/bundle.js");
// });

app.set("port", process.env.PORT || 9000);

app.listen(app.get("port"), function() {
  console.log("app started");
});
