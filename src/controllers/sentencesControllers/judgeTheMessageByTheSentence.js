import generateTime from "../generateTimeController";
import { greetingsMessageByTime } from "./greetingsController";
import { generateAnHTMLElement } from "../html-templates/generateHTMLController";
import structureWeatherMessage from "../weatherController";
import { configureVoice } from "../voiceConfigurations/configureVoice";
import { verifyIfThereIsAKeyValue } from "./verifyIfThereIsAKeyValue";

import { saveConversation } from "../../services/saveConversation";

import { sentencesToSepakAutomatically } from "../../utils/sentences";
import MessageConfiguration from "../../utils/messageConfiguration";
import readOutLoudAText from "./readText";

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
