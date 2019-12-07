// Node Packages
const express = require("express");
const app = express();
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
const dotenv = require("dotenv");
const passport = require("passport");


// Global Variables
const PORT = process.env.PORT || 3001;

// Initialize DotEnv
dotenv.config();

// DB Config
const db = require("./config/connection");

// BodyParser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());


// Routes
app.use("/api", apiRoutes);


// Connect To Server
app.listen(PORT, () => {
console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
PORT,
PORT)
});