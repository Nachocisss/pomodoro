import React from "react";
import "./Form.css";
import { useTodoContext } from "../../../context/TodoContext.tsx";

export function Form() {
  const { addTodo } = useTodoContext();

  function submitHandler(e) {
    e.preventDefault();
    const newTodoTitle = document.getElementById("newTodoTitle")?.value;
    addTodo(newTodoTitle);
  }
  return (
    <form action="" className="todoForm" onSubmit={submitHandler}>
      <label className="todoLabel"> New Task</label>
      <input type="text" className="todoInput" id="newTodoTitle" />
      <button className="todoFormButton">Add</button>
    </form>
  );
}
