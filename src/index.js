import generateTime from "./controllers/generateTimeController";
import { generateAnHTMLElement } from "./controllers/html-templates/generateHTMLController";
import { listHTMLElements } from "./controllers/html-templates/listHTMLElements";
import { toggleClassNameByElement } from "./controllers/html-templates/animateHTML";
import readOutLoudAText from "./controllers/readText";

import { saveConversation } from "./services/saveConversation";

import MessageConfiguration from "./utils/messageConfiguration";
import structureWeatherMessage from "./controllers/weatherController";

const buttonToTalk = document.querySelector("#talk-btn");
const content = document.querySelector(".conversation");
const checkboxToSave = document.querySelector(".save-conversation");

const greetings = ["E aí Dev!", "Olá como está?", "E aí tudo bem!"];
import { voiceRecognition } from "./utils/voiceConfiguration";

listHTMLElements(content);

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
  content.appendChild(myMessage);

  saveConversation(messageConfiguration, checkboxToSave);
  configureAndUseTheVoiceBasedInAMessage(voiceResultInAText);
};

buttonToTalk.addEventListener("click", () => {
  voiceRecognition.start();
});

function configureAndUseTheVoiceBasedInAMessage(message) {
  const voiceConfiguration = new SpeechSynthesisUtterance();

  if (message.includes("Olá")) {
    const finalText = greetings[Math.floor(Math.random() * greetings.length)];
    let messageConfiguration = new MessageConfiguration();
    messageConfiguration.className = "robot-message";
    messageConfiguration.childs[0].textContent = finalText;
    messageConfiguration.childs[1].textContent = generateTime();
    const robotMessage = generateAnHTMLElement(messageConfiguration);

    content.appendChild(robotMessage);

    saveConversation(messageConfiguration, checkboxToSave);

    voiceConfiguration.text = finalText;
  } else if (message.includes("informar o clima")) {
    return structureWeatherMessage();
  } else {
    let messageConfiguration = new MessageConfiguration();
    const finalText = "Eu não sei o que você disse";
    messageConfiguration.className = "robot-message";
    messageConfiguration.childs[0].textContent = finalText;
    messageConfiguration.childs[1].textContent = generateTime();
    const robotMessage = generateAnHTMLElement(messageConfiguration);

    content.appendChild(robotMessage);

    saveConversation(messageConfiguration, checkboxToSave);

    voiceConfiguration.text = finalText;
  }

  voiceConfiguration.volume = 1;
  voiceConfiguration.rate = 1;
  voiceConfiguration.pitch = 1;

  readOutLoudAText(voiceConfiguration);
}
