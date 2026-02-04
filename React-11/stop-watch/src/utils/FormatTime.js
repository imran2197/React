const FormatTime = (time) => {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor(time / 60) % 60;
  const seconds = time % 60 < 10 ? `0${time % 60}` : time % 60;
  return `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds}`;
};

export { FormatTime };
