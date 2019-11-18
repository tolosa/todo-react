import React from 'react';

import Header from './components/Header/header';
import TodoList from './components/TodoList/todolist';
import NewTodoForm from './components/NewTodoForm/newtodoform';

import './App.css';

const App = () =>
  <div className="App">
    <Header title="Awesome React To-Do!" />
    <NewTodoForm />
    <TodoList />
  </div>

export default App;
