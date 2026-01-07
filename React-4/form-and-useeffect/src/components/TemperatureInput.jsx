function TemperatureInput({ temperature, onTemperatureChange }) {
  return (
    <>
      <input
        type="text"
        value={temperature}
        onChange={(e) => onTemperatureChange(e.target.value)}
      />
    </>
  );
}

export default TemperatureInput;
