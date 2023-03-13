const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
const data = JSON.parse(fs.readFileSync(`${__dirname}/countries.json`));

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/countries", (req, res) => {
    res.send(data);
});


app.post("/post", (req, res) => {
  res.send("Post sent");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
