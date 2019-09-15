import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

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

  return(
    isEditModeState ? (
      <div>
        <input type="text" value={newValueState} onChange={handleValueEdit} />
        <FontAwesomeIcon icon={faCheckCircle} onClick={handleAcceptEdit} />
        <FontAwesomeIcon icon={faTimesCircle} onClick={() => handleOnEdit(false)} />
      </div>
    ) : (
      <div>
        {props.value}
        <FontAwesomeIcon icon={faEdit} onClick={() => handleOnEdit(true)} />
      </div>
    )
  );
}

export default InPlaceEdit;
