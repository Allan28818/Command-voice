const firebase = require("firebase");
const auth = require("../firebaseConfig/firebase.js").auth;

module.exports = {
  async saveConversation(conversationToSave) {
    try {
      const currentUser = auth.currentUser.providerData;

      await firebase
        .firestore()
        .collection("messages")
        .doc(currentUser.uid)
        .set({
          messages: conversationToSave,
        });
    } catch (error) {
      return {
        message: "Wasn't possible to save your messages! Try it later...",
        erroCode: error.code,
        errorMessage: error.message,
      };
    }

    return { message: "Your messages were successfuly saved!" };
  },
};
