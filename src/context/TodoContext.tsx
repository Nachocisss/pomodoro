import React, { createContext, useContext, useState } from "react";

const initialValues = {
  todos: [{}],
  addTodo: (title) => {
    console.log(title);
  },
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

  function addTodo(title) {
    console.log(title, "aqui");

    setTodos((prev) => [...prev, { title: title }]);
  }
  return (
    <TodoContext.Provider value={{ todos, addTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodoContext() {
  return useContext(TodoContext);
}
