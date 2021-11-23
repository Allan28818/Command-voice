const auth = require("../../firebaseConfig/firebase.js").auth;

module.exports = {
  async resetPassword(email) {
    try {
      await auth.sendPasswordResetEmail(email);
    } catch (error) {
      return {
        message:
          "It wasn't possible to send the reset solicitation! Try it later...",
        errorCode: error.code,
        errorMessage: error.messge,
      };
    }

    return {
      message: "The reset request was successfuly sent to your e-mail!",
    };
  },
};
