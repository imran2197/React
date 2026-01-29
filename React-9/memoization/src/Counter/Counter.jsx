import React from "react";
import { useState } from "react";
import Happy from "./Happy";
import Person from "./Person";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Max");
  console.log("Counter Re-rendered");
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Happy />
      <Person name={name} />
      <button onClick={() => setName("Md Imran")}>Change Name</button>
    </div>
  );
};

export default Counter;
