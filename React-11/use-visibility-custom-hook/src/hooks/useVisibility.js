import { useState } from "react";

export function useVisibility(initialValue = false) {
  const [visiblity, setVisibility] = useState(initialValue);

  const show = () => {
    setVisibility(true);
  };

  const hide = () => {
    setVisibility(false);
  };

  const toggle = () => {
    setVisibility((v) => !v);
  };

  return { visiblity, show, hide, toggle };
}
