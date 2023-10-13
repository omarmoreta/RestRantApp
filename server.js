// separated server startup so I can import for testing
require("dotenv").config();
const app = require("./index");
const PORT = process.env.PORT || 8080;

app.listen(PORT, function () {
  console.log(`Server listening on port: ${PORT}`);
});
