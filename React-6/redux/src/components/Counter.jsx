import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/slices/counterSlice";

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
}

export default Counter;
