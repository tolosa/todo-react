import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner as spinnerIcon } from '@fortawesome/free-solid-svg-icons';
import * as actions from '../../store/actionCreators';

import Todo from './Todo/todo';

const TodoList = (props) => {
  useEffect(() => {
    props.fetchTasks();
  }, []);

  const renderTodos = () =>
    <ul className="list-group list-group-flush">
      {props.tasks.map((task, index) =>
        <Todo title={task.title} isDone={task.isDone}
          onChecked={(isDone) => props.onChecked(index, isDone)}
          onChange={(value) => props.onChange(index, value)}
          onDelete={() => props.onDelete(index)} />)}
    </ul>;

  const renderMessage = (content) =>
    <span className="lead text-muted text-uppercase p-3">{content}</span>;

  const renderContent = () => {
    if (!props.tasks) {
      return renderMessage(
        <>
          Loading...
          <FontAwesomeIcon icon={spinnerIcon} spin size="lg" className="ml-2" />
        </>,
      );
    } else if (!props.tasks.length) {
      return renderMessage('No tasks to show');
    } else {
      return renderTodos();
    }
  };

  return (
    <div className="card">
      {renderContent()}
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

const mapDispatchToProps = (dispatch) => ({
  fetchTasks: () => dispatch(actions.fetchTasks()),
  onChecked: (index, isDone) => dispatch(actions.changeStatus(index, isDone)),
  onChange: (index, text) => dispatch(actions.edit(index, text)),
  onDelete: (index) => dispatch(actions.remove(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
