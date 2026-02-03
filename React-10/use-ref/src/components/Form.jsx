// import React from "react";
// import { useState } from "react";

// const Form = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const usernameChangeHandler = (e) => {
//     setUsername(e.target.value);
//   };
//   const passwordChangeHandler = (e) => {
//     setPassword(e.target.value);
//   };
//   const formSubmitHandler = (e) => {
//     e.preventDefault();
//     console.log(username, password);
//   };
//   return (
//     <form onSubmit={formSubmitHandler}>
//       <input
//         type="text"
//         placeholder="username"
//         onChange={usernameChangeHandler}
//       />
//       <input
//         type="password"
//         placeholder="password"
//         onChange={passwordChangeHandler}
//       />
//       <button>Submit</button>
//     </form>
//   );
// };

// export default Form;

import React, { useRef } from "react";

const Form = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    console.log(username, password);

    // Optional: clear inputs after submit
    usernameRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <input type="text" placeholder="Username" ref={usernameRef} />
      <input type="password" placeholder="Password" ref={passwordRef} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
