import React from "react";
import { memo } from "react";

const Happy = memo(() => {
  console.log("Happy Re-rendered");
  return (
    <div>
      <h2>I am 😀</h2>
    </div>
  );
});

export default Happy;
