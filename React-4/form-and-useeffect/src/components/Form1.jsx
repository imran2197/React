import React, { useState } from "react";

function Form1() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email);
  };
  return (
    <>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>{name}</p>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Form1;
