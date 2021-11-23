const login = require("../../services/authentication/loginWithEmailAndPassword.js");
const auth = require("../../firebaseConfig/firebase.js").auth;
const validators = require("./validators.js");
const { validateEmail, validatePassword } = validators;

module.exports = {
  async login(req, res) {
    const { email, password } = req.body;

    const isAValidEmail = validateEmail(email);
    const isAValidPassword = validatePassword(password);

    if (!isAValidEmail && !isAValidPassword) {
      return res.redirect("/error/email_and_password_incorrect");
    } else if (!isAValidEmail) {
      return res.redirect("/error/incorrect_email");
    } else if (!isAValidPassword) {
      return res.redirect("/error/incorrect_password");
    }

    const loginResponse = await login.loginWithEmailAndPassword(
      email,
      password
    );

    if (loginResponse.errorCode) {
      return res.redirect("/error/user_does_not_exist");
    }

    if (auth.currentUser.emailVerified) {
      return res.redirect("/");
    }

    return res.redirect("/error/account_error");
  },
};
