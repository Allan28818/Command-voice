import { conversationData } from "../utils/conversationData.js";

function saveConversation(messageToSave, htmlElement) {
  if (!!htmlElement.checked) {
    conversationData.push(messageToSave);
    const conversation = JSON.parse(
      localStorage.getItem("conversation") || "[]"
    );
    conversation.push(messageToSave);

    const serializedConversation = JSON.stringify(conversation);

    if (conversation) {
      conversation.map((teste) => {
        if (teste.className === "my-message") {
          console.log("Sua mensagem", teste.childs[0].textContent);
        } else {
          console.log("Mensagem do assistente", teste.childs[0].textContent);
        }
      });
    }

    localStorage.setItem("conversation", serializedConversation);
  }

  return;
}

export { saveConversation };
