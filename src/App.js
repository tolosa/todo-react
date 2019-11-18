/* eslint-disable no-return-assign */
import React, { Component } from 'react';

import Header from './components/Header/header';
import TodoList from './components/TodoList/todolist';
import NewTodoForm from './components/NewTodoForm/newtodoform';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Awesome React To-Do!" />
        <NewTodoForm />
        <TodoList />
      </div>
    );
  }
}

export default App;
