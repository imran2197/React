import React, { useEffect } from "react";
import useFetch from "../hooks/useFetch";

const Product = () => {
  const [data, fetchDetails, isLoading, isError] = useFetch(
    "https://fakestoreapi.com/products/1",
  );
  useEffect(() => {
    fetchDetails();
  }, []);
  return (
    <>
      <h1>Product Details</h1>
      {isLoading && <p>Loading...</p>}
      {data && <h4>{data.title}</h4>}
      {isError && <p>{isError}</p>}
    </>
  );
};

export default Product;
