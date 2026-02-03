import React from "react";
import { useRef } from "react";
import { useState } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(0);
  let timerId = useRef(null);
  const startTimer = () => {
    timerId.current = setInterval(() => {
      setTimer((t) => t + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerId.current);
  };
  return (
    <div>
      <h1>Timer: {timer}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
};

export default Timer;
