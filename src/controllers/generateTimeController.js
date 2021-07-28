import { sentencesToSepakAutomatically } from "../utils/sentences";

const generateTime = (emoticonType = false) => {
  const date = new Date();
  const currentHour = date.getHours();

  if (emoticonType === "time") {
    if (currentHour >= 0 && currentHour < 5) {
      return `${date.getHours()}:${date.getMinutes()} - ${date.getDate()}/${
        date.getMonth() + 1
      } 😴`;
    } else if (currentHour >= 5 && currentHour < 12) {
      return `${date.getHours()}:${date.getMinutes()} - ${date.getDate()}/${
        date.getMonth() + 1
      } 🌄`;
    } else if (currentHour >= 12 && currentHour < 18) {
      return `${date.getHours()}:${date.getMinutes()} - ${date.getDate()}/${
        date.getMonth() + 1
      } 🌞`;
    } else {
      return `${date.getHours()}:${date.getMinutes()} - ${date.getDate()}/${
        date.getMonth() + 1
      } 🌛`;
    }
  } else if (emoticonType === "error") {
    return `${date.getHours()}:${date.getMinutes()} - ${date.getDate()}/${
      date.getMonth() + 1
    } ${
      sentencesToSepakAutomatically.emoticonsForErrors[
        Math.floor(
          Math.random() *
            sentencesToSepakAutomatically.emoticonsForErrors.length
        )
      ]
    }`;
  }

  return `${date.getHours()}:${date.getMinutes()} - ${date.getDate()}/${
    date.getMonth() + 1
  }`;
};

export default generateTime;
