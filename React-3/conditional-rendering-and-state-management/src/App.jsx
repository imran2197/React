import User from "./assets/data/User";
import Button from "./components/Button";
import Counter from "./components/Counter";
import Message from "./components/Message";
import UserCard from "./components/UserCard";

function App() {
  return (
    <>
      {/* <Message isLoggedIn={true} /> */}
      {/* <Button></Button> */}
      {/* <Counter /> */}
      <UserCard user={User} />
    </>
  );
}

export default App;
