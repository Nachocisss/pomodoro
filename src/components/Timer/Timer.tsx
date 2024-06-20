import React, { useState } from "react";
import "./Timer.css";
import { useTodoContext } from "../../context/TodoContext.tsx";
import buttonsList from "../../constants/buttonsList.tsx";
import { formatTime } from "../../utils/TimeUtils.tsx";

export default function Timer() {
  const { time } = useTodoContext();
  const buttonsArray = buttonsList();
  const [selectedButton, setSelectedButton] = useState(0);

  function clockRender() {
    return (
      <div className="clockContainer">
        <span className="clockTime">{formatTime(time)}</span>
      </div>
    );
  }

  function timerButtons() {
    return (
      <div className="timerButtons">
        {buttonsArray.map((b, index) => {
          const isSelected = index === selectedButton;
          return (
            <div
              key={b.key}
              className={`timerIconContainer ${
                isSelected ? "timerIconContainerSelected" : ""
              }`}
              onClick={() => {
                b.onclick(), setSelectedButton(index);
              }}
            >
              {b.icon}
            </div>
          );
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
