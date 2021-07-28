import { generateAnHTMLElement } from "./generateHTMLController.js";
import NoMessagesConfiguration from "../../utils/noMessagesConfiguration.js";

const conversationData = JSON.parse(localStorage.getItem("conversation"));
const parsedConversationData = conversationData
  ? Array.from(conversationData)
  : false;

function listHTMLElements(fatherElement) {
  if (!!parsedConversationData.length) {
    conversationData.forEach((htmlElementConfiguration) => {
      const myMessage = generateAnHTMLElement(htmlElementConfiguration);
      const emptyMessage = document.querySelector(".no-messages-wrapper");

      if (emptyMessage) {
        fatherElement.removeChild(emptyMessage);
      }

      fatherElement.appendChild(myMessage);
    });
  } else {
    const noMessagesConfiguration = new NoMessagesConfiguration();
    const emptyMessage = generateAnHTMLElement(noMessagesConfiguration);

    fatherElement.appendChild(emptyMessage);
  }
  return;
}

export { listHTMLElements };
