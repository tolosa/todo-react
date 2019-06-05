import React, { Component } from 'react';
import './App.css';

import Header from './Header/header';
import TodoList from './TodoList/todolist';
import Todo from './Todo/todo';
import NewTodoForm from './NewTodoForm/newtodoform';

class App extends Component {
  state = { tasks: [] };
  handleOnAdd = (task) => {
    const {tasks} = this.state;
    tasks.push(task);
    this.setState({tasks});
  }
  renderTodos() {
    return this.state.tasks.map((task) =>
      <Todo title={task} />
    );
  }
  render() {
    return (
      <div className="App">
        <Header title="Awesome React To-Do!" />
        <NewTodoForm onAdd={this.handleOnAdd} />
        <TodoList>
          {this.renderTodos()}
        </TodoList>
      </div>
    );
  }
}

export default App;
