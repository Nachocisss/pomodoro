import React, { useState } from "react";
import "./TodoList.css";
import { Form } from "./Form/Form.tsx";
import { FaCheckCircle } from "react-icons/fa";

const tasks = [
  {
    title: " 1ra task",
  },
  {
    title: " 2da task",
  },
];

export default function TodoList() {
  const [selectedTaskIndex, setSelectedtaskIndex] = useState(1);

  function handleSelectedStyle(classname, selected) {
    return `${classname} ${selected && `${classname}Selected`}`;
  }

  function taskRender(t, index) {
    const selected = index === selectedTaskIndex;
    return (
      <div
        className={handleSelectedStyle("todoTab", selected)}
        onClick={() => setSelectedtaskIndex(index)}
      >
        <span className={handleSelectedStyle("todoTitle", selected)}>
          {t.title}
        </span>
        {selected && <FaCheckCircle size={15} fill="white" />}
      </div>
    );
  }

  function todoHeader() {
    return (
      <div className="todoHeader">
        <span className="todoHeaderText">Select Your Task</span>
      </div>
    );
  }

  return (
    <div className="todoContainer">
      {todoHeader()}
      {tasks.map((t, index) => {
        return taskRender(t, index);
      })}
      <Form />
    </div>
  );
}
