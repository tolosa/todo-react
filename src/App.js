import React from 'react';
import './App.css';

import Header from './Header/header';
import TodoList from './TodoList/todolist';

function App() {
  return (
    <div className="App">
      <Header title="Awesome React To-Do!" />
      <TodoList>
        TODO: add todo items here
      </TodoList>
    </div>
  );
}

export default App;
