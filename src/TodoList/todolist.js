import React from 'react';

const TodoList = (props) => {
  return(
    <div className="card">
      { props.children.length ? (
        <ul className="list-group list-group-flush">
          {props.children}
        </ul>
      ) : (
        <span className="lead text-muted text-uppercase p-3">No tasks to show</span>
      ) }
    </div>
  );
}

export default TodoList;
