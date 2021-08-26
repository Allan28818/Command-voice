import { generateAnHTMLElement } from "./generateHTMLController.js";

function generateEmptyTemplate(elementConfiguration) {
  if (elementConfiguration) {
    generateAnHTMLElement(elementConfiguration);
  }

  return;
}

export default generateEmptyTemplate;
