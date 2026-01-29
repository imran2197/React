import React, { useEffect, useState } from "react";

const Product = () => {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1")
      .then((res) => res.json())
      .then((res) => setProduct(res));
  }, []);
  if (!product) {
    return <p>Loading...</p>;
  }
  return <p>{product?.title}</p>;
};

export default Product;
