import React, { createContext, useContext, useState } from "react";

const initialValues = {
  todos: [{}],
};

const TodoContext = createContext(initialValues);

export function TodoProvider({ children }: any) {
  const [todos, setTodos] = useState([
    {
      title: "sca cscas",
    },
    {
      title: " 2da task",
    },
  ]);
  console.log(setTodos);

  return (
    <TodoContext.Provider value={{ todos }}>{children}</TodoContext.Provider>
  );
}

export function useTodoContext() {
  return useContext(TodoContext);
}
