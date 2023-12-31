const express = require("express");
const placesController = require("./controllers/places");
const { createEngine } = require("express-react-views");
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", createEngine());
app.use(express.static("public"));

app.use("/places", placesController);

// GET / (home/base url)
app.get("/", (req, res) => {
  res.render("home");
});

// GET /* (wildcard/catch-all route)
app.get("*", (req, res) => {
  res.status(404).render("error404");
});

module.exports = app;
