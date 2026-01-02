import DisplayData from "./components/DisplayData";
import MyComponent from "./components/MyComponent";

function App() {
  const fruits = ["Apple", "Banana", "Cherry"];
  const person = {
    name: "Alex",
    age: 28,
  };

  return (
    <>
      {/* <MyComponent message="Hello from Component One" />
        <MyComponent message="Hello from Component Two" />
        <MyComponent message="Hello from Component Three" /> */}

      <DisplayData fruits={fruits} person={person} />
    </>
  );
}

export default App;
