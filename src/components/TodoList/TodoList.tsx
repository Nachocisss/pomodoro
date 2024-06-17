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

  function selectedTaskRender(t) {
    return (
      <div className="todoTabSelected">
        <span className="todoTitleSelected">{t.title}</span>
        <span className="todoTimeSelected">{t.time}</span>
      </div>
    );
  }
  function taskRender(t, index) {
    return (
      <div className="todoTab" onClick={() => setSelectedtaskIndex(index)}>
        <span className="todoTitle">{t.title}</span>
        <span className="todoTime">{t.time}</span>
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
        return index === selectedTaskIndex
          ? selectedTaskRender(t)
          : taskRender(t, index);
      })}
    </div>
  );
}
