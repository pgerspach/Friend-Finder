const express = require("express");
var bodyParser = require("body-parser");

const path = require("path");

const data = require("./app/data/friends");
const htmlRoutes = require("./app/routing/htmlRoutes");
const apiRoutes = require("./app/routing/apiRoutes");
const app = express();
const PORT = process.env.PORT || 3000;
const users = data.people;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

htmlRoutes(app,path);

apiRoutes(app,path);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
