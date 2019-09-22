import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

  return (isLoadingState ? 'Loading...' : 'Done');
}

export default ActivityIndicator;
