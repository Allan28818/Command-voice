const auth = require("../../firebaseConfig/firebase.js").auth;

async function loginWithEmailAndPassword(email, password) {
  try {
    const response = await auth.signInWithEmailAndPassword(email, password);

    if (response.additionalUserInfo?.isNewUser) {
      return { message: "Seja bem vindo(a) ao Robot Speaker!" };
    }
  } catch (error) {
    return {
      message: "Não foi possível realizar o login!",
      errorCode: error.code,
      errorMessage: error.message,
    };
  }

  return { message: "Login realizado com sucesso!" };
}

module.exports = {
  loginWithEmailAndPassword,
};
