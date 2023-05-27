const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;

const app = express();

let items = ["Prepare your coffee", "Start the PC", "Start coding"];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  let today = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  let day = today.toLocaleDateString("en-US", options);

  res.render("list", { kindOfDay: day, newListItems: items });
});

app.post("/", (req, res) => {

  let newItem = req.body.newItem;

  items.push(newItem);
  res.redirect("/");
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
