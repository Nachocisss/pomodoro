import { FaPlay, FaPause, FaStop, FaFastForward } from "react-icons/fa";
import { useTodoContext } from "../context/TodoContext.tsx";
import React from "react";

export default function buttonsList() {
  const { putTimeOnClock, putPause } = useTodoContext();
  const buttons = [
    {
      icon: <FaPlay size={40} fill={"black"} />,
      onclick: () => {
        putTimeOnClock(120);
      },
      key: "playButton",
    },
    {
      icon: <FaPause size={40} fill={"black"} />,
      onclick: () => {
        putPause();
      },
      key: "pauseButton",
    },
    {
      icon: <FaStop size={40} fill={"black"} />,
      onclick: () => {
        putTimeOnClock(0);
      },
      key: "stopButton",
    },
    {
      icon: <FaFastForward size={40} fill={"black"} />,
      onclick: () => {
        console.log("FaFastForward");
      },
      key: "forwardButton",
    },
  ];
  return buttons;
}
