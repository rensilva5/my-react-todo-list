import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form.js";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterTodos, setFilterTodos] = useState([]);

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  // //Functions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilterTodos(todos.filter((todo) => todo.completed));
        break;
      case "uncompleted":
        setFilterTodos(todos.filter((todo) => todo.completed));
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  };
  return (
    <>
      <div className="App">
        <header>
          <h1>Silva's Todo List</h1>
        </header>
        <Form
          inputText={inputText}
          todos={todos}
          setTodos={setTodos}
          setInputText={setInputText}
          setStatus={setStatus}
        />
        <TodoList
        filterTodos={filterTodos}
        setTodos={setTodos}
        todos={todos} />
      </div>
    </>
  );
}

export default App;
