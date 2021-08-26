const selectedSpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const voiceRecognition = new selectedSpeechRecognition();

export { voiceRecognition };
