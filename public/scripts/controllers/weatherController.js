import { saveConversation } from "../services/saveLocalConversation.js";
import WeatherConfiguration from "../utils/weatherConfiguration.js";

import generateTime from "./generateTimeController.js";
import { generateAnHTMLElement } from "./html-templates/generateHTMLController.js";
import readOutLoudAText, {
  returnConfiguredVoice,
} from "./sentencesControllers/readText.js";

const conversation = document.querySelector(".conversation");
const checkboxToSave = document.querySelector(".save-conversation");

window.onload = () => {
  navigator.geolocation.watchPosition(({ coords }) => {
    const { latitude } = coords;
    const { longitude } = coords;

    localStorage.setItem("longitude", longitude);
    localStorage.setItem("latitude", latitude);
  });

  return null;
};

const latitude = localStorage.getItem("latitude");
const longitude = localStorage.getItem("longitude");

const weatherConfiguration = new WeatherConfiguration();

function structureWeatherMessage() {
  const urlToFetch =
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
    latitude +
    "&lon=" +
    longitude +
    "&appid=9d605350be1a49ff24363d4ee569bedb&lang=pt_br&units=metric";
  fetch(urlToFetch)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const image = returnAttributeByClassName(
        "image-weather",
        weatherConfiguration.childs
      );
      const title = returnAttributeByClassName(
        "weather-status",
        weatherConfiguration.childs
      );
      const temperature = returnAttributeByClassName(
        "temperature",
        weatherConfiguration.childs
      );
      const feelsLike = returnAttributeByClassName(
        "feelsLike",
        weatherConfiguration.childs
      );
      const cloudsLevel = returnAttributeByClassName(
        "cloudsLevel",
        weatherConfiguration.childs
      );
      const windSpeed = returnAttributeByClassName(
        "windSpeed",
        weatherConfiguration.childs
      );
      const messageTime = returnAttributeByClassName(
        "time",
        weatherConfiguration.childs
      );
      const humidity = returnAttributeByClassName(
        "humidity",
        weatherConfiguration.childs
      );

      const elementsList = {
        image,
        title,
        temperature,
        feelsLike,
        cloudsLevel,
        windSpeed,
        messageTime,
        humidity,
      };

      setElementProperties(data, elementsList);
      const robotWeatherMessage = generateAnHTMLElement(weatherConfiguration);

      conversation.appendChild(robotWeatherMessage);
      saveConversation(weatherConfiguration, checkboxToSave);
    });
}

function setElementProperties(data, elementsList) {
  const {
    image,
    title,
    temperature,
    feelsLike,
    cloudsLevel,
    windSpeed,
    messageTime,
    humidity,
  } = elementsList;

  const formatedTemperatures = {
    maxTemperature: data.main.temp_max.toFixed(1).toString().replace(".", ","),
    minTemperature: data.main.temp_min.toFixed(1).toString().replace(".", ","),
    feelsLikeTemperature: data.main.feels_like
      .toFixed(1)
      .toString()
      .replace(".", ","),
  };

  image.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  image.alt = data.weather[0].description;
  title.textContent = `${data.name} - ${data.weather[0].description}`;
  temperature.textContent = `Temperatura máxima ${formatedTemperatures.maxTemperature}° - Temperatura mínima ${formatedTemperatures.minTemperature}°`;
  feelsLike.textContent = `Sensação térmica ${formatedTemperatures.feelsLikeTemperature}°`;
  cloudsLevel.textContent = `Densidade de nuvens ${data.clouds.all}% de 100%`;
  windSpeed.textContent = `Velocidade do vento ${(
    data.wind.speed * 3.6
  ).toFixed(1)} km/h`;
  humidity.textContent = `Humidade relativa do ar ${data.main.humidity}% de 100%`;

  messageTime.textContent = generateTime();

  const textToRead = `${data.name} - ${data.weather[0].description}. Temperatura máxima ${formatedTemperatures.maxTemperature}° - Temperatura miníma ${formatedTemperatures.minTemperature}°. Umidade realtiva do ar: ${data.main.humidity}`;
  const voiceConfiguration = returnConfiguredVoice(textToRead);
  readOutLoudAText(voiceConfiguration);
}

function returnAttributeByClassName(elementClassName, arrayToSearch) {
  return arrayToSearch.filter(
    (element) => element.className === elementClassName
  )[0];
}

export default structureWeatherMessage;
