import React, { memo } from "react";

const Button = memo(({ onClick }) => {
  return (
    <div>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
});

export default Button;
