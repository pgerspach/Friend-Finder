// const users = require("../data/friends");
const fs = require("fs");

const apiRoutes = function(app, path) {
  app.post("/api/friends", function(req, res) {
    // console.log(res);
    let userResponse = req.body;


    function getMatch(users) {
      for (let user of users) {
        let minScore = 4 * userResponse.scores.length;
        var match = userResponse;
        let score = 0;
        for (i = 0; i < userResponse.scores.length; i++) {
          score += Math.abs(userResponse.scores[i] - user.scores[i]);
        }
        match = score < minScore ? user : match;

        minScore = score < minScore ? score : minScore;
      }
      users.push(userResponse);

      fs.writeFile(
        path.resolve(__dirname, "../data/friends.json"),
        JSON.stringify(users),
        err => {
          if (err) throw err;
          res.send(match);

        }
      );
    }

    fs.readFile(
      path.resolve(__dirname, "../data/friends.json"),
      "utf8",
      (err, data) => {
        if (err) throw err;
        let users = JSON.parse(data);
        getMatch(users);
      }
    );
  });
};

module.exports = apiRoutes;