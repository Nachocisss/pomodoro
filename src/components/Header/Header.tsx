import React from "react";
import { GiTomato } from "react-icons/gi";
import "./Header.css";

export function Header() {
  return (
    <header className="headerContainer">
      <GiTomato size={27} fill="#ff7e5f" />
      <span className="headerTitle">Pomodoro</span>
    </header>
  );
}
