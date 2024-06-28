import React from "react";
import "./BoardScreen.css";
import BoardContent from "../BoardContent/BoardContent.tsx";
import { Header } from "../../components/Header/Header.tsx";
import { useTodoContext } from "../../context/TodoContext.tsx";

export default function BoardScreen() {
  const { finishedTodo } = useTodoContext();
  return (
    <div className="boardScreen">
      <Header />
      <BoardContent />
      {finishedTodo.title && (
        <div className="notification">
          <span className="notificationText">Congrats!</span>
          <span className="notificationSubText">
            You finish: {finishedTodo.title}
          </span>
        </div>
      )}
    </div>
  );
}
