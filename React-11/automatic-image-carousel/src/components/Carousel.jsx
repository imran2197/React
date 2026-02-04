import React, { useEffect, useState } from "react";
import { Products } from "./ProductsMock";
import "../App.css";

// Problem Statement: Automatic Image Carousel
// Create a simple image carousel component in React that automatically cycles through a list of images, displaying one image at a time. The carousel should also allow users to manually navigate to the next or previous image using buttons.

// Features:

// Automatically cycles through images every 2 seconds.
// Manual navigation to the next or previous image using buttons.
// Displays image, title, and description for each item.

const Carousel = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setIndex((currIndex) => {
        if (currIndex == Products.length - 1) {
          return 0;
        }
        return currIndex + 1;
      });
    }, 5000);
  }, []);

  const previousHandler = () => {
    setIndex((currIndex) => {
      if (currIndex == 0) {
        return Products.length - 1;
      }
      return currIndex - 1;
    });
  };

  const nextHandler = () => {
    setIndex((currIndex) => {
      if (currIndex == Products.length - 1) {
        return 0;
      }
      return currIndex + 1;
    });
  };
  return (
    <div className="container">
      <div className="card">
        <img src={Products[index].image} />
      </div>
      <h5>{Products[index].title}</h5>
      <h5>{Products[index].price}</h5>
      <button onClick={previousHandler}>Prev</button>
      <button onClick={nextHandler}>Next</button>
    </div>
  );
};

export default Carousel;
