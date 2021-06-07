const generateTime = () => {
  const date = new Date();

  return `${date.getHours()}:${date.getMinutes()} - ${date.getDate()}/${
    date.getMonth() + 1
  }`;
};

export default generateTime;
