function readOutLoudAText(textToRead) {
  return window.speechSynthesis.speak(textToRead);
}

export function returnConfiguredVoice(textMessage) {
  const voiceConfiguration = new SpeechSynthesisUtterance();
  voiceConfiguration.text = textMessage;
  voiceConfiguration.volume = 1;
  voiceConfiguration.rate = 1;
  voiceConfiguration.pitch = 1;

  return voiceConfiguration;
}

export default readOutLoudAText;
