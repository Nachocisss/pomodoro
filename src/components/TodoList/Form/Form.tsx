import React, { useState } from "react";
import "./Form.css";
import { useTodoContext } from "../../../context/TodoContext.tsx";

export function Form() {
  const { addTodo } = useTodoContext();
  const [inputValue, setInputValue] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    addTodo(inputValue);
    setInputValue("");
  }
  return (
    <form action="" className="todoForm" onSubmit={submitHandler}>
      <label className="todoLabel"> New Task</label>
      <input
        type="text"
        className="todoInput"
        id="newTodoTitle"
        value={inputValue}
        onChange={(v) => setInputValue(v.target.value)}
      />
      <button className="todoFormButton">Add</button>
    </form>
  );
}
