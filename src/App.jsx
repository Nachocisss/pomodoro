import React from "react";
import "./App.css";
import BoardScreen from "./screens/BoardScreen/BoardScreen.tsx";
import { TodoProvider } from "./context/TodoContext.tsx";

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <BoardScreen/>
      </TodoProvider>
    </div>
  );
}

export default App;
