import React, { Component } from 'react';
import axios from 'axios';

import Header from './Header/header';
import TodoList from './TodoList/todolist';
import NewTodoForm from './NewTodoForm/newtodoform';

import './App.css';

class App extends Component {
  state = { tasks: null };

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

  componentDidMount() {
    axios.get('/tasks.json', this.state.tasks)
      .then(response => {
        this.setState({ tasks: response.data || [] });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    axios.put('/tasks.json', this.state.tasks);
  }

  render() {
    return (
      <div className="App">
        <Header title="Awesome React To-Do!" />
        <NewTodoForm onAdd={this.handleOnAdd} />
        <TodoList tasks={this.state.tasks}
          onChecked={this.handleOnCheck}
          onChange={this.handleOnChange}
          onDelete={this.handleOnDelete} />
      </div>
    );
  }
}

export default App;
