require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;

// GET / (home/base url)
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// GET /* (wildcard/catch-all route)
app.get("*", (req, res) => {
  res.status(404).send("<h1>404 Not Found Page</h1>");
});

app.listen(PORT, function () {
  console.log(`Server listening on port: ${PORT}`);
});
