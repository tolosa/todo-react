import React, { Component } from 'react';
import './App.css';

// App components
import Header from './Header/header';
import TodoList from './TodoList/todolist';
import Todo from './Todo/todo';
import NewTodoForm from './NewTodoForm/newtodoform';

class App extends Component {
  state = { tasks: [] };

  handleOnAdd = (task) => {
    const {tasks} = this.state;
    tasks.push({ title: task, isDone: false });
    this.setState({tasks});
  }

  handleOnDelete = (index) => {
    const {tasks} = this.state;
    tasks.splice(index, 1);
    this.setState({tasks});
  }

  handleOnCheck = (index, isDone) => {
    const {tasks} = this.state;
    tasks[index].isDone = isDone;
    this.setState({tasks});
  }

  renderTodos() {
    return this.state.tasks.map((task, index) =>
      <Todo title={task.title} isDone={task.isDone}
        onChecked={(isDone) => { this.handleOnCheck(index, isDone) }}
        onDelete={() => { this.handleOnDelete(index) }} />
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
