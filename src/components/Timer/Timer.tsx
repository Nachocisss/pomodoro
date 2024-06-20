import React, { useState } from "react";
import "./Timer.css";
import { useTodoContext } from "../../context/TodoContext.tsx";
import buttonsList from "../../constants/buttonsList.tsx";
import { formatTime, stepsMinutes } from "../../utils/TimeUtils.tsx";
import { FaChevronDown } from "react-icons/fa";

export default function Timer() {
  const { time, currentStep } = useTodoContext();
  const buttonsArray = buttonsList();
  const [selectedButton, setSelectedButton] = useState(NaN);

  function stepsRender() {
    return (
      <div className="steps">
        {stepsMinutes.map((step, index) => {
          const isCurrent = index === currentStep;
          return (
            <div key={`step ${index}`} className="stepContainer">
              {isCurrent && (
                <div className="stepIconContainer">
                  <FaChevronDown />
                </div>
              )}
              <div className="stepCircle">
                <span className="stepText">{step}</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

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
      {stepsRender()}
      {clockRender()}
      {timerButtons()}
    </div>
  );
}
