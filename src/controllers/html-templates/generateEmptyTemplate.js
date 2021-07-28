import { generateAnHTMLElement } from "./generateHTMLController";

function generateEmptyTemplate(elementConfiguration) {
  if (elementConfiguration) {
    generateAnHTMLElement(elementConfiguration);
  }

  return;
}

export default generateEmptyTemplate;
