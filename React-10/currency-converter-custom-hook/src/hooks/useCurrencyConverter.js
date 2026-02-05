import { useCallback } from "react";

const useCurrencyConverter = (baseCurrency, targetCurrency) => {
  // Use the following predefined exchange rates for conversion:
  //  - USD to EUR: 0.93
  //  - EUR to USD: 1.07
  //  - GBP to USD: 1.21

  return useCallback(
    (amount) => {
      if (isNaN(amount)) {
        throw new Error("Amount should be a number!");
      }

      if (baseCurrency == "USD" && targetCurrency == "EUR") {
        return amount * 0.93;
      } else if (baseCurrency == "EUR" && targetCurrency == "USD") {
        return amount * 1.07;
      } else if (baseCurrency == "GBP" && targetCurrency == "USD") {
        return amount * 1.21;
      }
      return null;
    },
    [baseCurrency, targetCurrency],
  );
};

export default useCurrencyConverter;
