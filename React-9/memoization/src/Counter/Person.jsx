import React from "react";
import { memo } from "react";

const Person = memo(({ name }) => {
  console.log("Person Re-rendered");
  return <div>Name: {name}</div>;
});

export default Person;
