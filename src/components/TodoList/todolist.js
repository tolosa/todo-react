import React from 'react';
import Todo from './Todo/todo';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner as spinnerIcon } from '@fortawesome/free-solid-svg-icons';

const todoList = (props) => {

  const renderTodos = () =>
    <ul className="list-group list-group-flush">
      {props.tasks.map((task, index) =>
        <Todo title={task.title} isDone={task.isDone}
          onChecked={(isDone) => props.onChecked(index, isDone)}
          onChange={(value) => props.onChange(index, value)}
          onDelete={() => props.onDelete(index)} />)}
    </ul>

  const renderMessage = (content) =>
    <span className="lead text-muted text-uppercase p-3">{content}</span>

  const renderContent = () => {
    if (!props.tasks) {
      return renderMessage(
        <>
          Loading...
          <FontAwesomeIcon icon={spinnerIcon} spin size="lg" className="ml-2" />
        </>
      );
    } else if (!props.tasks.length) {
      return renderMessage('No tasks to show');
    } else {
      return renderTodos();
    }
  }

  return (
    <div className="card">
      {renderContent()}
    </div>
  )
}

export default todoList;
