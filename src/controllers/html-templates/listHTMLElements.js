import { generateAnHTMLElement } from "./generateHTMLController";

const conversationData = JSON.parse(localStorage.getItem("conversation"));

function listHTMLElements(fatherElement) {
  if (conversationData) {
    conversationData.forEach((htmlElementConfiguration) => {
      const myMessage = generateAnHTMLElement(htmlElementConfiguration);

      fatherElement.appendChild(myMessage);
    });
  }
  return;
}

export { listHTMLElements };
