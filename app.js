const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  
  let today = new Date();
  let currentDay = today.getDay();
  let day = "";

  if (currentDay === 6 || currentDay === 0) {
    day = "Weekend";
    res.send("weekend");
  } else {
    day = "Weekday";
    res.send("weekday");
  }
});










app.listen(port, () => {
  console.log("Server is running on port " + port);
});