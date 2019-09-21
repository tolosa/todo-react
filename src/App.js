import React, { Component } from 'react';
import './App.css';

import Header from './Header/header';
import TodoList from './TodoList/todolist';
import NewTodoForm from './NewTodoForm/newtodoform';

class App extends Component {
  state = { tasks: [] };

  handleOnAdd = (task) => {
    const { tasks } = this.state;
    tasks.push({ title: task, isDone: false });
    this.setState({ tasks });
  }

  handleOnDelete = (index) => {
    const { tasks } = this.state;
    tasks.splice(index, 1);
    this.setState({ tasks });
  }

  handleOnCheck = (index, isDone) => {
    const { tasks } = this.state;
    tasks[index].isDone = isDone;
    this.setState({ tasks });
  }

  handleOnChange = (index, value) => {
    const { tasks } = this.state; // TODO: refactor handlers to reduce duplication
    tasks[index].title = value; // TODO: avoid mutation, replace object
    this.setState({ tasks });
  }

  render() {
    return (
      <div className="App">
        <Header title="Awesome React To-Do!" />
        <NewTodoForm onAdd={this.handleOnAdd} />
        <TodoList tasks={this.state.tasks}
          onChecked={(index, isDone) => this.handleOnCheck(index, isDone)}
          onChange={(index, value) => this.handleOnChange(index, value)}
          onDelete={(index) => this.handleOnDelete(index)} />
      </div>
    );
  }
}

export default App;
