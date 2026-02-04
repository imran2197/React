import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { FormatTime } from "../utils/FormatTime";

// Problem Statement: StopWatch
// Create a stopwatch application using React. The stopwatch should have the following features:

// Start the timer.
// Stop the timer.
// Reset the timer.
// Display the elapsed time in a format of hours:minutes:seconds.

const StopWatch = () => {
  const [timer, setTimer] = useState(0);
  const timerId = useRef(null);

  const startTimer = () => {
    timerId.current = setInterval(() => {
      setTimer((t) => t + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerId.current);
  };

  const resetTimer = () => {
    setTimer(0);
    clearInterval(timerId.current);
  };

  return (
    <div>
      <h1>Time: {FormatTime(timer)}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default StopWatch;
