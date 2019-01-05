const express = require("express");
const path = require("path");

const data = require("./app/data/friends");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/home", function(req, res) {
  res.sendFile(path.join(__dirname, "/app/public/home.html"));
});
app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
