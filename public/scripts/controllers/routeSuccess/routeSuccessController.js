module.exports = {
  handleSuccess(req, res) {
    const successId = req.params.successType;

    let successTitle;
    let successDescription;

    if (successId === "success_reset_request") {
      successTitle = "Success reset request";
      successDescription = "Your request was sent and it worked!";
    } else if (successId === "success_first_auth") {
      successTitle = "Welcome";
      successDescription = "Your ";
    }
    res.render("successOperation", {
      successId,
      successTitle,
      successDescription,
    });
  },
};
