import React from 'react';
import Todo from './Todo/todo';

const todoList = (props) => {

  const renderTodos = () =>
    <ul className="list-group list-group-flush">
      { props.tasks.map((task, index) =>
        <Todo title={task.title} isDone={task.isDone}
          onChecked={(isDone) => props.onChecked(index, isDone)}
          onChange={(value) => props.onChange(index, value)}
          onDelete={() => props.onDelete(index)} />) }
    </ul>

  const renderEmptyMessage = () =>
    <span className="lead text-muted text-uppercase p-3">No tasks to show</span>

  return(
    <div className="card">
      { props.tasks.length ? renderTodos() : renderEmptyMessage() }
    </div>
  )
}

export default todoList;
