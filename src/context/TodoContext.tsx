import React, { createContext, useContext, useEffect, useState } from "react";

const initialValues = {
  todos: [{}],
  addTodo: (title) => {
    console.log(title);
  },
  time: 0,
  putPlay: () => {},
  putPause: () => {},
  forwardOnClick: () => {},
  putStop: () => {},
};

const stepsMinutes = [25, 5, 25, 5, 25, 5, 25, 30];

const TodoContext = createContext(initialValues);

export function TodoProvider({ children }: any) {
  const [time, setTime] = useState(stepsMinutes[0] * 60);
  const [pause, setPause] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (time <= 0 || pause) {
      return;
    }
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [time, pause]);

  function putStop() {
    setCurrentStep(0);
    setTime(stepsMinutes[0] * 60);
  }
  function putPause() {
    setPause(true);
  }
  function putPlay() {
    setPause(false);
  }
  function forwardOnClick() {
    const isLastStep = currentStep + 1 === stepsMinutes.length;
    if (isLastStep) {
      console.log("fin del ciclo");
    } else {
      const timeNextStepSeconds = stepsMinutes[currentStep + 1] * 60;
      setTime(timeNextStepSeconds);
      setCurrentStep((s) => s + 1);
    }
    putPause();
  }

  const [todos, setTodos] = useState([
    {
      title: "sca cscas",
    },
    {
      title: " 2da task",
    },
  ]);

  function addTodo(title) {
    setTodos((prev) => [...prev, { title: title }]);
  }
  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        time,
        putPlay,
        putPause,
        forwardOnClick,
        putStop,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export function useTodoContext() {
  return useContext(TodoContext);
}
