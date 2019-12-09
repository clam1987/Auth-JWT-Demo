// Modules
const router = require("express").Router();
const path = require("path");
const isUserAuthenticated = require("../config/authorization");

// HTML routes
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../htmlClient/index.html"));
  });

// Secure Route--isUserAuthenticated is a middlewear

  router.get("/secret", isUserAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../../htmlClient/secret.html"));
  });

module.exports = router;