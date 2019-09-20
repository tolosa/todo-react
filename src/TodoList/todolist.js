import React from 'react';
import Todo from './../Todo/todo';

const todoList = (props) => {

  const renderTodos = () =>
    <ul className="list-group list-group-flush">
      { props.tasks.map((task, index) =>
        <Todo title={task.title} isDone={task.isDone}
          onChecked={(isDone) => props.onChecked(index, isDone)}
          onChange={(value) => props.onChange(index, value)}
          onDelete={() => props.onDelete(index)} />) }
    </ul>

  return(
    <div className="card">
      { props.tasks.length ? renderTodos() : (
        <span className="lead text-muted text-uppercase p-3">No tasks to show</span>
      ) }
    </div>
  )
}

export default todoList;
