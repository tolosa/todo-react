import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import './inplaceedit.css';

const InPlaceEdit = (props) => {
  const [isEditModeState, setEditModeState] = useState(false);
  const [newValueState, setNewValueState] = useState();

  const inputRef = useRef();

  useEffect(() => {
    if(isEditModeState) inputRef.current.focus();
  }, [isEditModeState]);

  const handleOnEdit = (editing) => {
    setNewValueState(props.value);
    setEditModeState(editing);
  }

  const handleValueEdit = (sender) => {
    setNewValueState(sender.target.value);
  }

  const handleAcceptEdit = () => {
    setEditModeState(false);
    props.onChange(newValueState);
  }

  const renderViewMode = () => (
    <>
      <div class="form-control-plaintext">{props.value}</div>
      <div class="actions">
        <FontAwesomeIcon icon={faEdit} onClick={() => handleOnEdit(true)} className="text-success" />
      </div>
    </>
  )

  const renderEditMode = () => (
    <>
      <input type="text" className="form-control"
        value={newValueState} onChange={handleValueEdit} ref={inputRef} />
      <div class="actions">
        <FontAwesomeIcon icon={faCheckCircle} onClick={handleAcceptEdit} className="text-success" />
        <FontAwesomeIcon icon={faTimesCircle} onClick={() => handleOnEdit(false)} className="text-danger" />
      </div>
    </>
  )

  return(
    <div class="inplaceedit form-group d-block flex-grow-1">
      { isEditModeState ? renderEditMode() : renderViewMode() }
    </div>
  );
}

export default InPlaceEdit;
