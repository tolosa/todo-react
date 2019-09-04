import React from 'react';

const TodoList = (props) => {
  return(
    <div className="card">
      <ul className="list-group list-group-flush">
        {props.children}
      </ul>
    </div>
  );
}

export default TodoList;
