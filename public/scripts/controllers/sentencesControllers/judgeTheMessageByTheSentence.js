import generateTime from "../generateTimeController.js";
import { greetingsMessageByTime } from "./greetingsController.js";
import { generateAnHTMLElement } from "../html-templates/generateHTMLController.js";
import structureWeatherMessage from "../weatherController.js";
import { configureVoice } from "../voiceConfigurations/configureVoice.js";
import { verifyIfThereIsAKeyValue } from "./verifyIfThereIsAKeyValue.js";

import { saveConversation } from "../../services/saveConversation.js";

import { sentencesToSepakAutomatically } from "../../utils/sentences.js";
import MessageConfiguration from "../../utils/messageConfiguration.js";
import readOutLoudAText from "./readText.js";

const conversation = document.querySelector(".conversation");
const checkboxToSave = document.querySelector(".save-conversation");

function judgeTheMessageByTheSentence(sentenceToJudge) {
  const voiceConfiguration = new SpeechSynthesisUtterance();
  const { clientGreetings, clientWeather, unknownCommandsResponses } =
    sentencesToSepakAutomatically;

  if (verifyIfThereIsAKeyValue(clientGreetings, sentenceToJudge)) {
    const greetingsArrayByTime = greetingsMessageByTime();
    const finalText =
      greetingsArrayByTime[
        Math.floor(Math.random() * greetingsArrayByTime.length)
      ];

    let messageConfiguration = new MessageConfiguration();
    messageConfiguration.className = "robot-message";
    messageConfiguration.childs[0].textContent = finalText;
    messageConfiguration.childs[1].textContent = generateTime("time");

    const robotMessage = generateAnHTMLElement(messageConfiguration);
    conversation.appendChild(robotMessage);

    saveConversation(messageConfiguration, checkboxToSave);

    voiceConfiguration.text = finalText;
  } else if (verifyIfThereIsAKeyValue(clientWeather, sentenceToJudge)) {
    return structureWeatherMessage();
  } else {
    let messageConfiguration = new MessageConfiguration();
    const finalText =
      unknownCommandsResponses[
        Math.floor(Math.random() * unknownCommandsResponses.length)
      ];

    messageConfiguration.className = "robot-message";
    messageConfiguration.childs[0].textContent = finalText;
    messageConfiguration.childs[1].textContent = generateTime("error");
    const robotMessage = generateAnHTMLElement(messageConfiguration);

    conversation.appendChild(robotMessage);

    saveConversation(messageConfiguration, checkboxToSave);

    voiceConfiguration.text = finalText;
  }

  configureVoice(voiceConfiguration);

  readOutLoudAText(voiceConfiguration);
}

export default judgeTheMessageByTheSentence;
