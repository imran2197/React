import React, { useRef, useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  let timerIdRef = useRef(null);

  const startTimerHandler = () => {
    timerIdRef.current = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);
  };
  const stopTimerHandler = () => {
    clearInterval(timerIdRef.current);
  };
  const resetTimerHandler = () => {
    clearInterval(timerIdRef.current);
    setTime(0);
  };
  const formatTime = () => {
    // return new Date(time * 1000).toISOString().slice(11, 19);
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours}:${minutes}:${seconds}`;
  };
  return (
    <div>
      <h1>Stop Watch</h1>
      <h3>Time: {formatTime()}</h3>
      <button onClick={startTimerHandler}>Start</button>
      <button onClick={stopTimerHandler}>Stop</button>
      <button onClick={resetTimerHandler}>Reset</button>
    </div>
  );
};

export default Stopwatch;
