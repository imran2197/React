import React, { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValueState] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue != null ? storedValue : initialValue;
  });

  const setValue = (newValue) => {
    setValueState(newValue);
    localStorage.setItem(key, newValue);
  };

  return [value, setValue];
}

function App() {
  const [value, setValue] = useLocalStorage("search", "");
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default App;
