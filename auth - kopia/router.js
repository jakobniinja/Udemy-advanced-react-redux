const Authentication = require("./controllers/authentication");
const passportService = require("./services/passport");
const Passport = require("passport");
const passport = require("passport");

const requireAuth = passport.authenticate("jwt", { session: false });
const requireSignin = passport.authenticate("local", { session: false });

module.exports = (app) => {
  app.get("/", requireAuth, (req, res) => {
    res.send({ hi: "there " });
  });
  app.post("/signin", Authentication.signin);
  app.post("/signup", Authentication.signup);
};
