import React from "react";
import { useState } from "react";
import Happy from "./Happy";
import Person from "./Person";
import { useMemo } from "react";

const largeNumsArray = () => {
  console.log("Executing LargeNumsArray Function");
  const res = [];
  for (let i = 1; i <= 100000; i++) {
    res.push(i);
  }
  return res;
};

const sum = (arr) => {
  console.log("Executing Sum Function");
  return arr.reduce((acc, currVal) => acc + currVal, 0);
};

const Counter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Max");
  console.log("Counter Re-rendered");

  const largeArr = useMemo(() => largeNumsArray(), []);
  const totalSum = useMemo(() => sum(largeArr), [largeArr]);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Happy />
      <Person name={name} />
      <button onClick={() => setName("Md Imran")}>Change Name</button>
      <h5>Sum: {totalSum}</h5>
    </div>
  );
};

export default Counter;
