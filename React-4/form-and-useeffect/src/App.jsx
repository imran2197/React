import { useState } from "react";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import TemperatureDisplay from "./components/TemperatureDisplay";
import TemperatureInput from "./components/TemperatureInput";

function App() {
  const [temperature, setTemperature] = useState("");
  return (
    <>
      {/* <Form1 /> */}
      {/* <Form2 /> */}
      <TemperatureInput
        temperature={temperature}
        onTemperatureChange={setTemperature}
      />
      <TemperatureDisplay temperature={temperature} />
    </>
  );
}

export default App;
