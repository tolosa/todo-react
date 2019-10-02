/* eslint-disable default-case */
import React, { useState } from 'react';
import { connect } from 'react-redux';

const NewTodoForm = (props) => {
  const [textState, setTextState] = useState('');
  const [isValidState, setIsValidState] = useState(false);

  const handleAddClick = () => {
    props.onAdd(textState);
    setTextState('');
    setIsValidState(false); // TODO: check automatically after state change, avoid harcode
  };

  const handleOnChange = (e) => {
    const { value } = e.target;
    const isValid = !!value.trim();
    setIsValidState(isValid);
    setTextState(value);
  };

  const handleKeyUp = (e) => {
    if (e.key === 'Enter')
      handleAddClick();
  };

  return (
    <div className="card bg-light">
      <div className="card-body">
        <h5 className="card-title">Add new task</h5>
        <div className="form-group">
          <input value={textState} onChange={handleOnChange} onKeyUp={handleKeyUp} className="form-control form-control-lg" />
        </div>
        <button onClick={handleAddClick} disabled={!isValidState} type="button" className="btn btn-primary">Add task</button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (text) => dispatch({ type: 'ADD_TASK', text }),
  };
};

export default connect(null, mapDispatchToProps)(NewTodoForm);
