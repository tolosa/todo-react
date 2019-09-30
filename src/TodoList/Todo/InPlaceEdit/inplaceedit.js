/* eslint-disable default-case */
import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import './inplaceedit.css';

const InPlaceEdit = (props) => {
  const [isEditModeState, setEditModeState] = useState(false);
  const [newValueState, setNewValueState] = useState();

  const inputRef = useRef();

  useEffect(() => {
    if (isEditModeState) inputRef.current.focus();
  }, [isEditModeState]);

  const handleOnEdit = (editing) => {
    setNewValueState(props.value);
    setEditModeState(editing);
  };

  const handleValueEdit = (sender) => {
    setNewValueState(sender.target.value);
  };

  const handleAcceptEdit = () => {
    setEditModeState(false);
    props.onChange(newValueState);
  };

  const handleKeyUp = (e) => {
    switch (e.key) {
      case 'Enter':
        handleAcceptEdit();
        break;
      case 'Escape':
        handleOnEdit(false);
        break;
    }
  };

  const renderViewMode = () => (
    <>
      <div className="form-control-plaintext text-reset">{props.value}</div>
      {props.isEditable ? (
        <div className="actions">
          <FontAwesomeIcon icon={faEdit} onClick={() => handleOnEdit(true)} className="text-success" />
        </div>
      ) : null}
    </>
  );

  const renderEditMode = () => (
    <>
      <input type="text" className="form-control"
        value={newValueState} ref={inputRef}
        onChange={handleValueEdit} onKeyUp={handleKeyUp} />
      <div className="actions">
        <FontAwesomeIcon icon={faCheckCircle} onClick={handleAcceptEdit} className="text-success" />
        <FontAwesomeIcon icon={faTimesCircle} onClick={() => handleOnEdit(false)} className="text-danger" />
      </div>
    </>
  );

  return (
    <div className="inplaceedit form-group d-block flex-grow-1">
      {isEditModeState ? renderEditMode() : renderViewMode()}
    </div>
  );
};

export default InPlaceEdit;
