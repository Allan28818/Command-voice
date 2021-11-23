const validators = require("./validators");
const resetPassword =
  require("../../services/authentication/resetPassword.js").resetPassword;

const { validateEmail } = validators;

module.exports = {
  async reset(req, res) {
    const { email } = req.body;
    const isAValidEmail = validateEmail(email);

    if (!isAValidEmail) {
      return res.redirect("/error/incorrect_email");
    }

    const resetPasswordResponse = await resetPassword(email);

    if (resetPasswordResponse.errorCode) {
      return res.redirect("/error/failed_request_to_reset_password");
    }

    return res.redirect("/success/success_reset_request");
  },
};
