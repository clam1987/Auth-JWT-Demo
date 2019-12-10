// Node Packages
const express = require("express");
const app = express();
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes")
const dotenv = require("dotenv");
// const passport = require("passport");
const passport = require("./config/authentication");
// const path = require("path");
const cookieSession = require("cookie-session");
// const cookieParser = require("cookie-parser");


// Global Variables
const PORT = process.env.PORT || 3001;

// Initialize DotEnv
dotenv.config();

// Cookie Session configs
app.use(cookieSession({
    maxAge: 24*60*60*1000,
    // key to sign and verify cookies
    keys:[process.env.keys]
}))

// Static Public
app.use(express.static("public"));
// app.use(express.static(__dirname + "public"))

// BodyParser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());


// Routes
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);


// Connect To Server
app.listen(PORT, () => {
console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
PORT,
PORT)
});