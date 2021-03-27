const express = require("express");
const app = express();
const port = 3200;

global.__basedir = __dirname + "/..";

const initRoutes = require("./routes/routes");
initRoutes(app);

// Start server
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});
