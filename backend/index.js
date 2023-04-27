const express = require("express");
const app = express();
const port = 3000;

const db = require("./models");
app.get("/", (req, res) => {
  res.send("Hello");
});
db.sequelize.sync({ force: false }).then(function () {
  app.listen(port, function () {
    console.log("Server is running");
  });
});
