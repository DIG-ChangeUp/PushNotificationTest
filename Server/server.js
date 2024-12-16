const express = require("express");
const cors = require("cors");

function setupServer() {
  const app = express();
  app.use(express.json());
  app.use("/", express.static("../Client/dist"))
  app.use(cors());
  
  return app;
}

module.exports = { setupServer };