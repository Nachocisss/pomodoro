import React from "react";
import "./BoardScreen.css";
import BoardContent from "../BoardContent/BoardContent.tsx";
import { Header } from "../../components/Header/Header.tsx";

export default function BoardScreen() {
  return (
    <div className="boardScreen">
      <Header />
      <BoardContent />
    </div>
  );
}
