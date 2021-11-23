window.onbeforeunload = function (event) {
  event.preventDefault();
  event.returnValue = "Write something clever here..";
};

console.log(axios);

async function handleSubmitMessages() {
  const messages = JSON.parse(localStorage.getItem("conversation") || "[]");

  // const response = await axios.post("/save-message", { messages });

  // console.log(
  //   "response from the route '/save-message' [handleSubmitMessages - hanldeSubmitMessages.js]",
  //   response
  // );
}
