import React from 'react';
import './App.css';

import Header from './Header/header';
import TodoList from './TodoList/todolist';
import Todo from './Todo/todo';

function App() {
  return (
    <div className="App">
      <Header title="Awesome React To-Do!" />
      <TodoList>
        <Todo title="First task! Awesome!" />
        <Todo title="Second task" />
        <Todo title="A third task" />
      </TodoList>
    </div>
  );
}

export default App;
