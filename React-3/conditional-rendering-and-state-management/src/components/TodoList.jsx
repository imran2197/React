import { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [userTask, setUserTask] = useState("");
  const handleUserTask = (value) => {
    setUserTask(value);
  };

  const handleAddTask = () => {
    setTasks([...tasks, userTask]);
    setUserTask("");
    console.log(tasks);
  };

  const deleteHandler = (idx) => {
    tasks.splice(idx, 1);
    setTasks([...tasks]);
  };
  return (
    <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={userTask}
        placeholder="Enter Task..."
        style={{ marginRight: "10px", padding: "10px" }}
        onChange={(e) => handleUserTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => {
          return (
            <li key={`${task}_${index}`} style={{ listStyle: "none" }}>
              {task}
              <button
                style={{ marginLeft: "14px" }}
                onClick={() => deleteHandler(index)}
              >
                ❌
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
