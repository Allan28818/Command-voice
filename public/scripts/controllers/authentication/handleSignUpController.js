const signUp = require("../../services/authentication/signUp.js").signUp;
const validators = require("./validators.js");
const auth = require("../../firebaseConfig/firebase.js").auth;

const { validateEmail, validatePassword, validateName } = validators;

module.exports = {
  async signUp(req, res) {
    const { firstName, lastName, email, password } = req.body;

    const isAValidEmail = validateEmail(email);
    const isAValidPassword = validatePassword(password);
    const isAValidFirstName = validateName(firstName);
    const isAValidLastName = validateName(lastName);

    if (!isAValidEmail) {
      return res.redirect("/error/incorrect_email");
    }

    if (!isAValidPassword) {
      return res.redirect("/error/incorrect_password");
    }

    if (!isAValidFirstName) {
      return res.redirect("/error/invalid_first_name");
    }

    if (!isAValidLastName) {
      return res.redirect("/error/invalid_last_name");
    }

    const signUpResponse = await signUp({
      firstName,
      lastName,
      email,
      password,
    });

    if (signUpResponse.errorCode) {
      return res.redirect("/error/account_error");
    }

    if (auth.currentUser) {
      return res.redirect("/");
    }

    return res.redirect("/error/500");
  },
};
