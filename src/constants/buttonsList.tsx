import { FaPlay, FaPause, FaStop, FaFastForward } from "react-icons/fa";
import { useTodoContext } from "../context/TodoContext.tsx";
import React from "react";

export default function buttonsList() {
  const { putStop, putPlay, putPause, forwardOnClick } = useTodoContext();
  const buttons = [
    {
      icon: <FaPlay size={40} fill={"black"} />,
      onclick: () => {
        putPlay();
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
        putStop();
      },
      key: "stopButton",
    },
    {
      icon: <FaFastForward size={40} fill={"black"} />,
      onclick: () => {
        forwardOnClick();
      },
      key: "forwardButton",
    },
  ];
  return buttons;
}
