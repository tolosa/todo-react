import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync as spinnerIcon } from '@fortawesome/free-solid-svg-icons';

const ActivityIndicator = (props) => {
  const [isLoadingState, setLoadingState] = useState(false);

  useEffect(() => {
    axios.interceptors.request.use(config => {
      setLoadingState(true);
      return config;
    });
    axios.interceptors.response.use(response => {
      setLoadingState(false);
      return response;
    });
  }, []);

  return (isLoadingState ? <FontAwesomeIcon icon={spinnerIcon} spin size="lg" className="text-light" /> : null);
}

export default ActivityIndicator;
