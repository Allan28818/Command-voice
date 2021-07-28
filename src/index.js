import generateTime from "./controllers/generateTimeController";
import { generateAnHTMLElement } from "./controllers/html-templates/generateHTMLController";
import { listHTMLElements } from "./controllers/html-templates/listHTMLElements";
import { toggleClassNameByElement } from "./controllers/html-templates/animateHTML";
import judgeTheMessageByTheSentence from "./controllers/sentencesControllers/judgeTheMessageByTheSentence";

import { saveConversation } from "./services/saveConversation";

import MessageConfiguration from "./utils/messageConfiguration";
import { voiceRecognition } from "./utils/voiceConfiguration";

const buttonToTalk = document.querySelector("#talk-btn");
const conversationElementsFather = document.querySelector(
  "#conversation-father"
);
const conversation = document.querySelector(".conversation");
const checkboxToSave = document.querySelector(".save-conversation");
listHTMLElements(conversation);

voiceRecognition.onstart = () => {
  console.log("voice is activated, you can microphonee");
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
  const emptyMessage = document.querySelector(".no-message-wrapper");

  if (emptyMessage && message)
    conversationElementsFather.removeChild(emptyMessage);

  judgeTheMessageByTheSentence(message);
}
