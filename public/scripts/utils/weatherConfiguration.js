function WeatherConfiguration() {
  this.elementName = "article";
  this.className = "weather-message";
  this.childs = [
    {
      elementName: "img",
      isImage: true,
      src: "",
      alt: "",
      className: "image-weather",
    },
    {
      elementName: "h3",
      textContent: "",
      className: "weather-status",
    },
    {
      elementName: "p",
      textContent: "",
      className: "humidity",
    },
    {
      elementName: "p",
      textContent: "",
      className: "temperature",
    },
    {
      elementName: "p",
      textContent: "",
      className: "feelsLike",
    },
    {
      elementName: "p",
      textContent: "",
      className: "windSpeed",
    },
    {
      elementName: "strong",
      textContent: "",
      className: "cloudsLevel",
    },
    {
      elementName: "span",
      textContent: "--:--",
      className: "time",
    },
  ];
}

export default WeatherConfiguration;
