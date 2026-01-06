// import products from "./assets/data/Products";
import User from "./assets/data/User";
import Button from "./components/Button";
import Counter from "./components/Counter";
import Message from "./components/Message";
import ProductList from "./components/ProductList";
import TodoList from "./components/TodoList";
import UserCard from "./components/UserCard";

function App() {
  return (
    <>
      {/* <Message isLoggedIn={true} /> */}
      {/* <Button></Button> */}
      {/* <Counter /> */}
      {/* <UserCard user={User} /> */}
      {/* <ProductList products={products} /> */}
      <TodoList />
    </>
  );
}

export default App;
