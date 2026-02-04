import React from "react";
import useToggle from "../hooks/useToggle";

const Person = () => {
  const [isToggle, setIsToggle] = useToggle(false);
  return (
    <div>
      <h2 onClick={setIsToggle}>{isToggle ? "💔" : "💚"}</h2>
    </div>
  );
};

export default Person;
