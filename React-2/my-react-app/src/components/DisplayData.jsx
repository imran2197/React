import React from "react";

function DisplayData({ fruits, person }) {
  return (
    <div>
      <h2>Fruits</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

      <br />

      <h2>Person</h2>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
    </div>
  );
}

export default DisplayData;
