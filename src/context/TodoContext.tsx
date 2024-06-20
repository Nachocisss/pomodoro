import React, { createContext, useContext, useEffect, useState } from "react";

const initialValues = {
  todos: [{}],
  addTodo: (title) => {
    console.log(title);
  },
  time: 0,
  putTimeOnClock: (t) => {
    console.log(t);
  },
  putPause: () => {},
};

const TodoContext = createContext(initialValues);

export function TodoProvider({ children }: any) {
  const [time, setTime] = useState(0);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (time <= 0 || pause) return;
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  function putTimeOnClock(t) {
    setTime(t);
    setPause(false);
  }
  function putPause() {
    setPause(true);
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
      value={{ todos, addTodo, time, putTimeOnClock, putPause }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export function useTodoContext() {
  return useContext(TodoContext);
}
