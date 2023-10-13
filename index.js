const express = require("express");
const placesController = require("./controllers/places");
const app = express();

// middleware
app.use("/places", placesController);

// GET / (home/base url)
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// GET /* (wildcard/catch-all route)
app.get("*", (req, res) => {
  res.status(404).send("<h1>404 Not Found Page</h1>");
});

module.exports = app;
