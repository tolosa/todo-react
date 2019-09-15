import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const InPlaceEdit = (props) => {
  const [isEditModeState, setEditModeState] = useState(false);

  const handleOnEdit = (editing) => {
    setEditModeState(editing);
  }

  return(
    isEditModeState ? (
      <div>
        <input type="text" />
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
