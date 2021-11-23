const express = require("express");

const route = express.Router();

const handleLoginController = require("../public/scripts/controllers/authentication/handleLoginController.js");
const handleSignUpController = require("../public/scripts/controllers/authentication/handleSignUpController.js");
const handleResetPasswordController = require("../public/scripts/controllers/authentication/handleResetPasswordController.js");

const routeSuccessController = require("../public/scripts/controllers/routeSuccess/routeSuccessController.js");
const routeErrorsController = require("../public/scripts/controllers/routeErrors/routeErrorsController.js");

const verifyRouteController = require("../public/scripts/controllers/authentication/authRoutes/verifyRoute.js");

const handleSaveMessage = require("../public/scripts/controllers/database/handleSaveMessages.js");

route.get("/", (req, res) => res.render("index", { page: "chat" }));

route.get("/login", (req, res) => res.render("login", { page: "login" }));
route.get("/sign-up", (req, res) => {
  res.render("signUp", { page: "sign up" });
});
route.get("/reset-password", (req, res) =>
  res.render("resetPassword", { page: "reset password" })
);

route.post("/login", handleLoginController.login);
route.post("/sign-up", handleSignUpController.signUp);
route.post("/reset-password", handleResetPasswordController.reset);
route.post("/save-message", handleSaveMessage.handleSave);

route.get("/error/:errorType", routeErrorsController.handleError);
route.get("/success/:successType", routeSuccessController.handleSuccess);

route.get("/teste", verifyRouteController.verifyRoute);

module.exports = route;
