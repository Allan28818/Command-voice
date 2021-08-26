import generateTime from "./controllers/generateTimeController.js";
import { generateAnHTMLElement } from "./controllers/html-templates/generateHTMLController.js";
import { listHTMLElements } from "./controllers/html-templates/listHTMLElements.js";
import { toggleClassNameByElement } from "./controllers/html-templates/animateHTML.js";
import judgeTheMessageByTheSentence from "./controllers/sentencesControllers/judgeTheMessageByTheSentence.js";

import { saveConversation } from "./services/saveConversation.js";

import MessageConfiguration from "./utils/messageConfiguration.js";
import { voiceRecognition } from "./utils/voiceConfiguration.js";

const buttonToTalk = document.querySelector("#talk-btn");
const conversation = document.querySelector(".conversation");
const noMessagesWrapper = document.querySelector(".no-messages-container");
const checkboxToSave = document.querySelector(".save-conversation");

listHTMLElements(conversation, noMessagesWrapper);

voiceRecognition.onstart = () => {
  toggleClassNameByElement([buttonToTalk], ["talking"]);
};

voiceRecognition.onresult = (event) => {
  const currentVoiceEventIndex = event.resultIndex;
  const voiceResultInAText =
    event.results[currentVoiceEventIndex][0].transcript;

  const messageConfiguration = new MessageConfiguration();
  messageConfiguration.childs[0].textContent = voiceResultInAText;
  messageConfiguration.childs[1].textContent = generateTime();

  const myMessage = generateAnHTMLElement(messageConfiguration);

  toggleClassNameByElement([buttonToTalk], ["talking"]);
  conversation.appendChild(myMessage);

  saveConversation(messageConfiguration, checkboxToSave);
  configureAndUseTheVoiceBasedInAMessage(voiceResultInAText);
};

buttonToTalk.addEventListener("click", () => {
  voiceRecognition.start();
});

function configureAndUseTheVoiceBasedInAMessage(message) {
  if (noMessagesWrapper) {
    noMessagesWrapper.classList.add("hidden");
  }
  judgeTheMessageByTheSentence(message);
}
