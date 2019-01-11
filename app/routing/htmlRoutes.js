const htmlRoutes = (app, path)=> {
    app.get("/home", (req, res)=>{
      res.sendFile(path.join(__dirname, "../public/home.html"));
    });
  
    app.get("/survey", (req, res)=>{
      res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
  };
  
  module.exports = htmlRoutes;