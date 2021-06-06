const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const greetings = [
  'E aí Dev!', 
  'Olá como está?',
  'E aí tudo bem, cadê o café?'
];

const selectedSpeechRecognition = 
   window.SpeechRecognition 
   ||
   window.webkitSpeechRecognition;

const voiceRecognition = new selectedSpeechRecognition();

voiceRecognition.onstart = ()  =>
{
  console.log('voice is activated, you can microphonee');
}

voiceRecognition.onresult = (event) =>
{
  const currentVoiceEventIndex = 
  event
  .resultIndex;

  const voiceResultInAText = 
  event
  .results[currentVoiceEventIndex][0]
  .transcript;

  content.textContent = voiceResultInAText;

  configureAndUseTheVoiceBasedInAMessage(voiceResultInAText);
}

btn.addEventListener('click', () => {
  voiceRecognition.start();
})


function configureAndUseTheVoiceBasedInAMessage(message) {
  const voiceConfiguration = new SpeechSynthesisUtterance();

  voiceConfiguration.text = 'Eu não sei o que você disse';
  
  if(message.includes('Olá')) {
    const finalText = greetings[Math.floor(Math.random() * greetings.length)];
    voiceConfiguration.text = finalText;
  }

  voiceConfiguration.volume = 1;
  voiceConfiguration.rate = 1;
  voiceConfiguration.pitch = 1;

  readOutLoudAText(voiceConfiguration);
}

function readOutLoudAText(textToRead) 
{
   return window
   .speechSynthesis
   .speak(textToRead);
}