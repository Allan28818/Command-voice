const auth = require("../../../firebaseConfig/firebase.js").auth;

module.exports = {
  verifyRoute(req, res) {
    if (auth.currentUser) {
      return res.redirect(req.route.path);
    }

    return res.redirect("/login");
  },
};
