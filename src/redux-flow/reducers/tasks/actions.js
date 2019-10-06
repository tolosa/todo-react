import { ActionTypes as types } from './constants';
import axios from 'axios';

export const fetchTasks = () => dispatch => {
  return axios.get('/tasks.json')
    .then(response => {
      dispatch({
        type: types.FETCH_TASKS,
        payload: response.data
      });
  }).catch(() => Promise.reject());
}