import React from "react";
import "./Form.css";

export function Form() {
  return (
    <form action="" className="todoForm">
      <label className="todoLabel"> New Task</label>
      <input type="text" className="todoInput" />
      <button className="todoFormButton">Add</button>
    </form>
  );
}
