import React from "react";
import "./BoardScreen.css";
import { GiTomato } from "react-icons/gi";
import BoardContent from "../BoardContent/BoardContent.tsx";

export default function BoardScreen() {
  return (
    <div className="boardScreen">
      <header className="headerContainer">
        <GiTomato size={27} fill="#ff7e5f" />
        <span className="headerTitle">Pomodoro</span>
      </header>
      <BoardContent />
    </div>
  );
}
