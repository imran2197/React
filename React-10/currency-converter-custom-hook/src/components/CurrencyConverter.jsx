import React, { useState } from "react";
import useCurrencyConverter from "../hooks/useCurrencyConverter";

const CurrencyConverter = () => {
  const [usdAmount, setUsdAmount] = useState("");
  const [eurAmount, setEurAmount] = useState("");
  const [gbpAmount, setGbpAmount] = useState("");

  const [convertedEur, setConvertedEur] = useState("");
  const [convertedUsdFromEur, setConvertedUsdFromEur] = useState("");
  const [convertedUsdFromGbp, setConvertedUsdFromGbp] = useState("");

  const convertUsdToEur = useCurrencyConverter("USD", "EUR");
  const convertEurToUsd = useCurrencyConverter("EUR", "USD");
  const convertGbpToUsd = useCurrencyConverter("GBP", "USD");

  const handleUsdAmountChange = (e) => {
    const value = e.target.value;
    setUsdAmount(value);
    const eur = convertUsdToEur(value);
    setConvertedEur(eur);
  };

  const handleEurAmountChange = (e) => {
    const value = e.target.value;
    setEurAmount(value);
    const usd = convertEurToUsd(value);
    setConvertedUsdFromEur(usd);
  };

  const handleGbpAmountChange = (e) => {
    const value = e.target.value;
    setGbpAmount(value);
    const usd = convertGbpToUsd(value);
    setConvertedUsdFromGbp(usd);
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
        <p>Converted to EUR: {convertedEur}</p>
      </div>

      <div>
        <label>EUR to USD: </label>
        <input
          type="text"
          placeholder="Enter EUR amount"
          value={eurAmount}
          onChange={handleEurAmountChange}
        />
        <p>Converted to USD: {convertedUsdFromEur}</p>
      </div>

      <div>
        <label>GBP to USD: </label>
        <input
          type="text"
          placeholder="Enter GBP amount"
          value={gbpAmount}
          onChange={handleGbpAmountChange}
        />
        <p>Converted to USD: {convertedUsdFromGbp}</p>
      </div>
    </div>
  );
};

export default CurrencyConverter;
