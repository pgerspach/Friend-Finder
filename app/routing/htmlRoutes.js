const htmlRoutes = (app, path) => {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  app.get("/:htmlRoute", (req, res) => {

    switch(req.params.htmlRoute){
      case("home"):
      res.sendFile(path.join(__dirname, "../public/home.html"));
      break;
      case("survey"):
      res.sendFile(path.join(__dirname, "../public/survey.html"));
      break;
      default:
      res.send("Cannot find the page you are looking for.")
      break
    }
  });
};

module.exports = htmlRoutes;
