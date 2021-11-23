const firebase = require("firebase");

const config = require("./config").config;

const Firebase = firebase.initializeApp(config);
const Providers = {
  google: new firebase.auth.GoogleAuthProvider(),
};

const auth = firebase.auth();

module.exports = {
  auth,
  Providers,
  Firebase,
};
