// Modules
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const dotenv = require("dotenv");
// Initiate dotenv
dotenv.config();

// Passport Initiate
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CONSUMER_KEY,
      clientSecret: process.env.GOOGLE_CONSUMER_SECRET,
      callbackURL: "http://localhost:3001/api/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      done(null, profile); // passes the profile data to serializeUser
    }
  )
);

// Handles token login
passport.serializeUser((user, done) => {
  done(null, user);
});

// Handles token logout
passport.deserializeUser((user, done) => {
  done(null, user);
});

module.exports = passport;
