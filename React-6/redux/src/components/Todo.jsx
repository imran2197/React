import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setValue, addTask } from "../redux/slices/todoSlice";

function Todo() {
  const dispatch = useDispatch();
  const { value, todoList } = useSelector((state) => state.todo);

  const handleChange = (e) => {
    dispatch(setValue(e.target.value));
  };
  return (
    <div>
      <h2>Todo</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          style={{
            padding: "8px",
            margin: "0px 10px",
            backgroundColor: "white",
            borderRadius: "10px",
            outline: "none",
            color: "black",
          }}
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Add Task"
        />
        <button onClick={() => dispatch(addTask())}>Add</button>
      </div>
      {todoList.map((item) => (
        <p>{item}</p>
      ))}
    </div>
  );
}

export default Todo;
