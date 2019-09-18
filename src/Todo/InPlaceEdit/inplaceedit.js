import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import './inplaceedit.css';

const InPlaceEdit = (props) => {
  const [isEditModeState, setEditModeState] = useState(false);
  const [newValueState, setNewValueState] = useState();

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
    // TODO: avoid container duplication
    <div class="inplaceedit form-group d-block flex-grow-1">
      <div class="form-control-plaintext">{props.value}</div>
      <div class="actions">
        <FontAwesomeIcon icon={faEdit} onClick={() => handleOnEdit(true)} />
      </div>
    </div>
  )

  const renderEditMode = () => (
    // TODO: avoid container duplication
    <div class="inplaceedit form-group d-block flex-grow-1">
      <input type="text" value={newValueState} onChange={handleValueEdit} class="form-control" />
      <div class="actions">
        <FontAwesomeIcon icon={faCheckCircle} onClick={handleAcceptEdit} />
        <FontAwesomeIcon icon={faTimesCircle} onClick={() => handleOnEdit(false)} />
      </div>
    </div>
  )

  return(
    isEditModeState ? renderEditMode() : renderViewMode()
  );
}

export default InPlaceEdit;
