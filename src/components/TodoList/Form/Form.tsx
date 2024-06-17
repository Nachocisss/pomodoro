import React from "react";
import "./Form.css";
import { useTodoContext } from "../../../context/TodoContext.tsx";

export function Form() {
  const { addTodo } = useTodoContext();

  function submitHandler(e) {
    e.preventDefault();
    const newTodo = document.getElementById("newTodoTitle")?.value;
    addTodo(newTodo);
  }
  return (
    <form action="" className="todoForm" onSubmit={submitHandler}>
      <label className="todoLabel"> New Task</label>
      <input type="text" className="todoInput" id="newTodoTitle" />
      <button className="todoFormButton">Add</button>
    </form>
  );
}
