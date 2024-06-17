import React from "react";
import "./Timer.css";
import { FaPlay, FaPause, FaStop, FaFastForward } from "react-icons/fa";

export default function Timer() {
  const buttonsInfo = [
    {
      icon: <FaPlay size={40} fill={"black"} />,
      onclick: () => {
        console.log("play");
      },
    },
    {
      icon: <FaPause size={40} fill={"black"} />,
      onclick: () => {
        console.log("pause");
      },
    },
    {
      icon: <FaStop size={40} fill={"black"} />,
      onclick: () => {
        console.log("play");
      },
    },
    {
      icon: <FaFastForward size={40} fill={"black"} />,
      onclick: () => {
        console.log("FaFastForward");
      },
    },
  ];

  function clockRender() {
    return (
      <div className="clockContainer">
        <span className="clockTime">10:00</span>
      </div>
    );
  }
  function timerButtons() {
    return (
      <div className="timerButtons">
        {buttonsInfo.map((b) => {
          return <div className="timerIconContainer">{b.icon}</div>;
        })}
      </div>
    );
  }

  return (
    <div className="timerContainer">
      {clockRender()}
      {timerButtons()}
    </div>
  );
}
