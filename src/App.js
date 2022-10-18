import React, { useState } from 'react';
import './App.css';
import Form from './components/Form.js'
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState('')
  return (
    <>
    <div className="App">
      <header>
        <h1>Silva's Todo List</h1>
      </header>
      <Form />
      <TodoList />
    </div>
    </>
  );
}

export default App;
