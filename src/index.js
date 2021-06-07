import { generateAnHTMLElement } from "./controllers/generateHTMLController";
import generateTime from "./controllers/generateTimeController";
import MessageConfiguration from "./utils/messageConfiguration";

const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

const greetings = ["E aí Dev!", "Olá como está?", "E aí tudo bem!"];

const selectedSpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const voiceRecognition = new selectedSpeechRecognition();

voiceRecognition.onstart = () => {
  console.log("voice is activated, you can microphonee");
};

voiceRecognition.onresult = (event) => {
  const currentVoiceEventIndex = event.resultIndex;
  const voiceResultInAText =
    event.results[currentVoiceEventIndex][0].transcript;

  const messageConfiguration = new MessageConfiguration();
  messageConfiguration.childs[0].textContent = voiceResultInAText;
  messageConfiguration.childs[1].textContent = generateTime();

  const myMessage = generateAnHTMLElement(messageConfiguration);

  content.appendChild(myMessage);

  configureAndUseTheVoiceBasedInAMessage(voiceResultInAText);
};

btn.addEventListener("click", () => {
  voiceRecognition.start();
});

function configureAndUseTheVoiceBasedInAMessage(message) {
  const voiceConfiguration = new SpeechSynthesisUtterance();

  if (message.includes("Olá")) {
    const finalText = greetings[Math.floor(Math.random() * greetings.length)];
    const messageConfiguration = new MessageConfiguration();
    messageConfiguration.childs[0].textContent = finalText;
    messageConfiguration.childs[1].textContent = generateTime();
    const myMessage = generateAnHTMLElement(messageConfiguration);

    content.appendChild(myMessage);
    voiceConfiguration.text = finalText;
  } else {
    const messageConfiguration = new MessageConfiguration();
    const finalText = "Eu não sei o que você disse";
    messageConfiguration.childs[0].textContent = finalText;
    messageConfiguration.childs[1].textContent = generateTime();
    const myMessage = generateAnHTMLElement(messageConfiguration);

    content.appendChild(myMessage);
    voiceConfiguration.text = finalText;
  }

  voiceConfiguration.volume = 1;
  voiceConfiguration.rate = 1;
  voiceConfiguration.pitch = 1;

  readOutLoudAText(voiceConfiguration);
}

function readOutLoudAText(textToRead) {
  return window.speechSynthesis.speak(textToRead);
}
