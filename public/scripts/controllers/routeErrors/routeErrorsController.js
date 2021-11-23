module.exports = {
  handleError(req, res) {
    const errorId = req.params.errorType;

    let errorTitle;
    let errorDescription;

    if (errorId === "incorrect_password") {
      errorTitle = "Password error";
      errorDescription = "Please verify your password! Something it's wrong!";
    } else if (errorId === "incorrect_email") {
      errorTitle = "Email error";
      errorDescription = "Please verify your email! Something it's wrong!";
    } else if (errorId === "email_and_password_incorrect") {
      errorTitle = "Email and password error";
      errorDescription =
        "Your e-mail and password are wrong, make sure you typed in the correct way!";
    } else if (errorId === "user_does_not_exist") {
      errorTitle = "You're not signed";
      errorDescription =
        "You musn't be signed in our application! Make your sign up...";
    } else if (errorId === "failed_request_to_reset_password") {
      errorTitle = "Reset request failed!";
      errorDescription = "Something went wrong during the reset request!";
    } else if (errorId === "account_error") {
      errorTitle = "Account error";
      errorDescription =
        "We had some problems with your account. Verify your data, or try it later!";
    } else if (errorId === "500") {
      errorTitle = "Error 500";
      errorDescription = "Internal server error! Try it later!";
    }

    res.render("errorPage", { errorId, errorTitle, errorDescription });
  },
};
