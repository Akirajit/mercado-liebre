const path = require("path");
const express = require("express");
const app = express();

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.listen(3000, () => console.log("up and running"));

app.get("/", (req, res) =>
  res.sendFile(path.resolve(__dirname, "./views/home.html"))
);
