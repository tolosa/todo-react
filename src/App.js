/* eslint-disable no-return-assign */
import React, { Component } from 'react';
import axios from 'axios';

import Header from './components/Header/header';
import TodoList from './components/TodoList/todolist';
import NewTodoForm from './components/NewTodoForm/newtodoform';

import './App.css';

class App extends Component {
  state = { tasks: null };

  // TODO: move all this to redux
  componentDidMount() {
    axios.get('/tasks.json', this.state.tasks)
      .then(response => {
        this.setState({ tasks: response.data || [] });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.tasks && prevState.tasks !== this.state.tasks)
      axios.put('/tasks.json', this.state.tasks);
  }

  updateTasks(proc) {
    const tasks = this.state.tasks.splice(0);
    proc(tasks);
    this.setState({ tasks });
  }

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
