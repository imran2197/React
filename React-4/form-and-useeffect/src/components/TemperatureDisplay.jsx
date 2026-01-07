function TemperatureDisplay({ temperature }) {
  const fahreinheit = (temperature * 9) / 5 + 32;
  return (
    <div>
      <p>{temperature} °C</p>
      <p>{fahreinheit} °F</p>
    </div>
  );
}

export default TemperatureDisplay;
