// Modules
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const FacebookStrategy = require("passport-facebook");
const dotenv = require("dotenv");
// Initiate dotenv
dotenv.config();

// Passport Initiate Google Strat
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CONSUMER_KEY,
      clientSecret: process.env.GOOGLE_CONSUMER_SECRET,
      callbackURL: "http://localhost:3001/api/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      done(null, profile); // passes the profile data to serializeUser
    }
  )
);

// Facebook Strat
// passport.use(new FacebookStrategy({
//   clientID: process.env.FACEBOOK_ID,
//   clientSecret: process.env.FACEBOOK_SECRET,
//   callbackURL: "http://localhost:3001/api/auth/facebook/callback"
// },
// (accessToken, refreshToken, profile, done) => {
//   console.log(profile);
//  done(null, accessToken, profile);
// }
// ));


// Handles token login
passport.serializeUser((user, done) => {
  // console.log(user);
  done(null, user);
});

// Handles token logout
passport.deserializeUser((user, done) => {
  done(null, user);
});

module.exports = passport;
