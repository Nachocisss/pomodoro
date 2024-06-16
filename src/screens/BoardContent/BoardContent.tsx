import React from "react";
import "./BoardContent.css";
import TodoList from "../../components/TodoList/TodoList.tsx";
import Timer from "../../components/Timer/Timer.tsx";
export default function BoardContent() {
  const topText = (
    <>
      <h1>Maximize Your Productivity with the Ultimate Pomodoro Timer</h1>
      <h2>
        Boost Focus with 25-Minute Work Sessions, 5-Minute Breaks, and a Final
        30-Minute Rest
      </h2>
    </>
  );

  return (
    <div className="boardContent">
      {topText}
      <div className="bottomContainer">
        <Timer />
        <TodoList />
      </div>
    </div>
  );
}
