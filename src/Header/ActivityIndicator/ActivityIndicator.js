import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync as spinnerIcon, faCheckCircle as doneIcon } from '@fortawesome/free-solid-svg-icons';

const ActivityIndicator = (props) => {
  const [isLoadingState, setLoadingState] = useState(false);
  const [isDoneState, setDoneState] = useState(false);

  useEffect(() => {
    axios.interceptors.request.use(request => {
      setLoadingState(true);
      return request;
    });
    axios.interceptors.response.use(response => {
      setLoadingState(false);
      return response;
    });
  }, []); // TODO: unmount interceptors when no longer used

  useEffect(() => {
    if (!isLoadingState) {
      setDoneState(true);
      setTimeout(() => setDoneState(false), 1200);
    }
  }, [isLoadingState]);

  const icon = () => {
    let iconProps = null;
    if (isLoadingState) iconProps = { icon: spinnerIcon, spin: true };
    else if (isDoneState) iconProps = { icon: doneIcon };
    return iconProps ? <FontAwesomeIcon {...iconProps} size="lg" className="text-light" /> : null;
  }

  return icon();
}

export default ActivityIndicator;
