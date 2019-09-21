import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare as checkedIcon } from '@fortawesome/free-solid-svg-icons';
import { faSquare as uncheckedIcon } from '@fortawesome/free-regular-svg-icons';

const CustomCheckbox = (props) => {
  const handleOnClick = (sender) => {
    props.onChange(!props.checked);
  }

  const icon = props.checked ? checkedIcon : uncheckedIcon;

  return (
    <FontAwesomeIcon icon={icon} onClick={handleOnClick} size="lg" className="text-primary cursor-pointer mr-2" />
  );
}

export default CustomCheckbox;
