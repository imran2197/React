import React, { useState } from "react";

const CurrencyConverter = () => {
  const [usdAmount, setUsdAmount] = useState("");
  const [eurAmount, setEurAmount] = useState("");
  const [gbpAmount, setGbpAmount] = useState("");

  const handleUsdAmountChange = (e) => {
    const value = e.target.value;
    setUsdAmount(value);
  };

  const handleEurAmountChange = (e) => {
    const value = e.target.value;
    setEurAmount(value);
  };

  const handleGbpAmountChange = (e) => {
    const value = e.target.value;
    setGbpAmount(value);
  };

  return (
    <div>
      <h2>Currency Converter</h2>
      <div>
        <label>USD to EUR: </label>
        <input
          type="text"
          placeholder="Enter USD amount"
          value={usdAmount}
          onChange={handleUsdAmountChange}
        />
        <p>Converted to EUR: </p>
      </div>

      <div>
        <label>EUR to USD: </label>
        <input
          type="text"
          placeholder="Enter EUR amount"
          value={eurAmount}
          onChange={handleEurAmountChange}
        />
        <p>Converted to USD: </p>
      </div>

      <div>
        <label>GBP to USD: </label>
        <input
          type="text"
          placeholder="Enter GBP amount"
          value={gbpAmount}
          onChange={handleGbpAmountChange}
        />
        <p>Converted to USD: </p>
      </div>
    </div>
  );
};

export default CurrencyConverter;
