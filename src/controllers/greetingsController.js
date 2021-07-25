import { sentencesToSepakAutomatically } from "../utils/sentences";

export function greetingsMessageByTime() {
  const currentTime = new Date();

  if (currentTime.getHours() >= 0 && currentTime.getHours() < 5) {
    return sentencesToSepakAutomatically.greetings.dawn;
  } else if (currentTime.getHours() >= 5 && currentTime.getHours() < 12) {
    return sentencesToSepakAutomatically.greetings.morning;
  } else if (currentTime.getHours() >= 12 && currentTime.getHours() < 18) {
    return sentencesToSepakAutomatically.greetings.afternoon;
  } else {
    return sentencesToSepakAutomatically.greetings.night;
  }
}
