import React, { useCallback, useState } from "react";
import Button from "./Button";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button Clicked");
  }, []);
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <Button onClick={handleClick} />
    </>
  );
};

export default Counter;
