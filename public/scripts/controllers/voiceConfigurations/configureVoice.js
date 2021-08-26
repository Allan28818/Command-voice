function configureVoice(voiceConfiguration, voiceOptionalValues) {
  if (voiceOptionalValues) {
    const { volume, rate, pitch } = voiceOptionalValues;

    voiceConfiguration.volume = volume;
    voiceConfiguration.rate = rate;
    voiceConfiguration.pitch = pitch;

    return;
  }

  voiceConfiguration.volume = 1;
  voiceConfiguration.rate = 1;
  voiceConfiguration.pitch = 1;
}

export { configureVoice };
