const express = require("express");
const multer = require("multer");
const Router = express.Router;

const router = new Router();
const csvController = require("../controllers/csv.controllers");
const upload = multer({ dest: "../static/assets/uploads/" });

const routes = (app) => {
  router.post("/upload", upload.single("file"), csvController.upload);

  app.use("/api/csv", router);
};

module.exports = routes;
