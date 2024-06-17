import React, { useState } from "react";
import "./TodoList.css";

const tasks = [
  {
    title: " 1ra task",
    time: 14,
  },
  {
    title: " 2da task",
    time: 309,
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
        <span className={handleSelectedStyle("todoTime", selected)}>
          {t.time}
        </span>
      </div>
    );
  }

  function todoHeader() {
    return (
      <div className="todoHeader">
        <span className="todoHeaderText">SELECT YOUR TASK</span>
      </div>
    );
  }

  return (
    <div className="todoContainer">
      {todoHeader()}
      {tasks.map((t, index) => {
        return taskRender(t, index);
      })}
    </div>
  );
}
