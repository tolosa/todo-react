import React, { Component } from 'react';
import axios from 'axios';

import Header from './Header/header';
import TodoList from './TodoList/todolist';
import NewTodoForm from './NewTodoForm/newtodoform';

import './App.css';

class App extends Component {
  state = { tasks: null };

  handleOnAdd = (task) => {
    this.updateTasks((tasks) => {
      tasks.push({ title: task, isDone: false });
    });
  }

  handleOnDelete = (index) => {
    this.updateTasks((tasks) => {
      tasks.splice(index, 1);
    });
  }

  handleOnCheck = (index, isDone) => {
    this.updateTasks((tasks) => {
      tasks[index].isDone = isDone;
    });
  }

  handleOnChange = (index, value) => {
    this.updateTasks((tasks) => {
      tasks[index].title = value;
    });
  }

  updateTasks(proc) {
    const { tasks } = this.state;
    proc(tasks);
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
