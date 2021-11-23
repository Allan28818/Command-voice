function handleInvalid(event, message) {
  if (message) {
    return event.target.setCustomValidity(message);
  }

  return event.target.setCustomValidity("");
}
