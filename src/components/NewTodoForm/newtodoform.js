import React, { useState, useRef } from 'react';

const NewTodoForm = (props) => {
  const [textState, setTextState] = useState('');
  const [isValidState, setIsValidState] = useState(false);
  const inputRef = useRef();

  const handleAddClick = () => {
    props.onAdd(textState);
    setTextState('');
    setIsValidState(false);
  };

  const handleOnChange = (e) => {
    const { value } = e.target;
    const isValid = !!value.trim();
    setIsValidState(isValid);
    setTextState(value);
  };

  return (
    <div className="card bg-light">
      <div className="card-body">
        <h5 className="card-title">Add new task</h5>
        <div className="form-group">
          <input value={textState} onChange={handleOnChange} ref={inputRef} className="form-control form-control-lg" />
        </div>
        <button onClick={handleAddClick} disabled={!isValidState} type="button" className="btn btn-primary">Add task</button>
      </div>
    </div>
  );
};

export default NewTodoForm;
