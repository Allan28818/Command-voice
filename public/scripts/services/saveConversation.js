import { conversationData } from "../utils/conversationData.js";

function saveConversation(messageToSave, htmlElement) {
  localStorage.setItem("conversation", null);

  if (!!htmlElement.checked) {
    conversationData.push(messageToSave);
    const serializedConversation = JSON.stringify(conversationData);

    localStorage.setItem("conversation", serializedConversation);
  }

  return;
}

export { saveConversation };
