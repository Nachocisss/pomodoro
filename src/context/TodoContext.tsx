import React, { createContext, useContext, useEffect, useState } from "react";
import { stepsMinutes } from "../utils/TimeUtils.tsx";

const initialValues = {
  todos: [{}],
  addTodo: (title) => {
    return title;
  },
  time: 0,
  putPlay: () => {},
  putPause: () => {},
  forwardOnClick: () => {},
  putStop: () => {},
  currentStep: 0,
  selectedTaskIndex: -1,
  chooseTodoIndex: (index) => {
    return index;
  },
  finishedTodo: { title: "title" },
};

const TodoContext = createContext(initialValues);

export function TodoProvider({ children }: any) {
  const [time, setTime] = useState(stepsMinutes[0] * 60);
  const [pause, setPause] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [finishedTodo, setFinishedTodo] = useState({ title: "" });
  const [selectedTaskIndex, setSelectedtaskIndex] = useState(-1);

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
    setPause(true);
  }
  function putPause() {
    setPause(true);
  }
  function putPlay() {
    setFinishedTodo({ title: "" });
    setPause(false);
  }
  function chooseTodoIndex(index) {
    setSelectedtaskIndex(index);
  }

  function finishTodo() {
    const getFinishedTodo = todos.todos[selectedTaskIndex];
    setFinishedTodo(getFinishedTodo);
    const newTodos = {
      todos: todos.todos.filter((_t, index) => index !== selectedTaskIndex),
    };
    setTodos(newTodos);
    setSelectedtaskIndex(-1);
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setCurrentStep(0);
  }

  function forwardOnClick() {
    const isLastStep = currentStep + 1 === stepsMinutes.length;
    if (isLastStep) {
      finishTodo();
    } else {
      const timeNextStepSeconds = stepsMinutes[currentStep + 1] * 60;
      setTime(timeNextStepSeconds);
      setCurrentStep((s) => s + 1);
    }
    setPause(true);
  }
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos") || "")
  );

  function addTodo(title) {
    const newTitle = { title: title };
    const newTodos = todos
      ? { todos: [...todos.todos, newTitle] }
      : { todos: [newTitle] };

    localStorage.setItem("todos", JSON.stringify(newTodos));
    setTodos(newTodos);
  }
  return (
    <TodoContext.Provider
      value={{
        todos: todos?.todos,
        addTodo,
        time,
        putPlay,
        putPause,
        forwardOnClick,
        putStop,
        currentStep,
        selectedTaskIndex,
        chooseTodoIndex,
        finishedTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export function useTodoContext() {
  return useContext(TodoContext);
}
