const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/auth.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    controller.signup
  );

  app.post("/api/auth/signin", controller.signin);
  app.post("/api/auth/signinlinkedin", controller.signinlinkedin);
  app.post("/api/auth/signinface", controller.signinface);

  app.get("/api/auth/confirm/:confirmationCode", controller.verifyUser)
  app.post("/api/auth/forgot", controller.resetPassword)

};
