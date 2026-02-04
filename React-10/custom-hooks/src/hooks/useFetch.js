import { useState } from "react";

export default function useFetch(url) {
  if (!url) {
    throw new Error("Url cannot be empty");
  }

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchDetails = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    } catch (e) {
      setIsError(e.message || "Something went wrong in fetching the details");
    } finally {
      setIsLoading(false);
    }
  };

  return [data, fetchDetails, isLoading, isError];
}
