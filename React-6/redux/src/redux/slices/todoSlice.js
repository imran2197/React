import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    value: "",
    todoList: [""],
  },
  reducers: {
    setValue(state, action) {
      console.log(action);
      state.value = action.payload;
    },
    addTask(state) {
      state.todoList.push(state.value);
      state.value = "";
    },
  },
});

export const { setValue, addTask } = todoSlice.actions;
export default todoSlice.reducer;
