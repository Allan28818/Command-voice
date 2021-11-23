import { generateAnHTMLElement } from "./generateHTMLController.js";
import NoMessagesConfiguration from "../../utils/noMessagesConfiguration.js";

const conversationData = JSON.parse(
  localStorage.getItem("conversation") || "[]"
);
const parsedConversationData = conversationData
  ? Array.from(conversationData)
  : false;

function listHTMLElements(fatherElement, noMessagesWrapper = null) {
  if (!!parsedConversationData.length) {
    conversationData.forEach((htmlElementConfiguration) => {
      const myMessage = generateAnHTMLElement(htmlElementConfiguration);

      if (noMessagesWrapper) {
        noMessagesWrapper.classList.add("hidden");
      }

      fatherElement.appendChild(myMessage);
    });
  } else {
    const noMessagesConfiguration = new NoMessagesConfiguration();
    const emptyMessage = generateAnHTMLElement(noMessagesConfiguration);

    noMessagesWrapper.appendChild(emptyMessage);
    noMessagesWrapper.classList.remove("hidden");
  }
  return;
}

export { listHTMLElements };
