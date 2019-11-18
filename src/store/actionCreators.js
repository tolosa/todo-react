import axios from 'axios';
import * as actions from './actionTypes';

const putTasks = (getState) =>
  axios.put('/tasks.json', getState().tasks);

export const fetchTasks = () => ((dispatch) =>
  axios
    .get('/tasks.json')
    .then(response =>
      dispatch(setTasks(response.data || []))
    )
);

export const setTasks = (tasks) => ({
  type: actions.SET_TASKS,
  tasks,
});

export const addTask = (text) => ((dispatch, getState) => {
  dispatch({ type: actions.ADD_TASK, text });
  putTasks(getState);
});

export const changeStatus = (index, isDone) => ((dispatch, getState) => {
  dispatch({ type: actions.CHANGE_STATUS, index, isDone });
  putTasks(getState);
});

export const edit = (index, text) => ((dispatch, getState) => {
  dispatch({ type: actions.EDIT, index, text });
  putTasks(getState);
});

export const remove = (index) => ((dispatch, getState) => {
  dispatch({ type: actions.DELETE, index });
  putTasks(getState);
});
