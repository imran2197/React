const Button = () => {
  const handleClick = (msg) => {
    console.log("Button clicked!", msg);
  };
  return (
    <>
      <button onClick={() => handleClick("Hello Imran")}>Click Me</button>
    </>
  );
};

export default Button;
