import { useState } from "react";

export default function useToggle(initialValue = false) {
  const [isToggle, setToggle] = useState(initialValue);
  const setIsToggle = () => {
    setToggle((t) => !t);
  };
  return [isToggle, setIsToggle];
}
