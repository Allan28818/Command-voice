const auth = require("../../firebaseConfig/firebase.js").auth;
const firebase = require("firebase");
require("firebase/firestore");


module.exports = {
  async signUp(userData) {
    const { firstName, lastName, email, password } = userData;

    try {
      const response = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      const userUid = response.user.uid;

      console.log("userUid", userUid);
      await firebase.firestore().collection("users").doc(userUid).set({
        id: userUid,
        firstName,
        lastName,
        email,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });

      console.log(response.user.uid);
    } catch (error) {
      return {
        message: "It wasn't possible to sign up! Try it later...",
        errorCode: error.errorCode,
        errorMessage: error.errorMessage,
      };
    }

    return { message: "The user was successfully created!" };
  },
};
