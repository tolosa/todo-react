import React, { Component } from 'react';
import './App.css';

import Header from './Header/header';
import TodoList from './TodoList/todolist';
import Todo from './Todo/todo';

class App extends Component {
  state = {
    tasks: [
      "First task! Awesome!",
      "Second task",
      "A third task"
    ]
  };
  renderTodos() {
    return this.state.tasks.map((task) =>
      <Todo title={task} />
    );
  }
  render() {
    return (
      <div className="App">
        <Header title="Awesome React To-Do!" />
        <TodoList>
          {this.renderTodos()}
        </TodoList>
      </div>
    );
  }
}

export default App;
