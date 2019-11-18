import axios from 'axios';
import * as actions from './actionTypes';

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

const dispatchAndPut = (type, payload, dispatch, getState) => {
  dispatch({ type, ...payload });
  axios.put('/tasks.json', getState().tasks);
};

export const addTask = (text) => (
  (dispatch, getState) =>
    dispatchAndPut(actions.ADD_TASK, { text }, dispatch, getState)
);

export const changeStatus = (index, isDone) => (
  (dispatch, getState) =>
    dispatchAndPut(actions.CHANGE_STATUS, { index, isDone }, dispatch, getState)
);

export const edit = (index, text) => (
  (dispatch, getState) =>
    dispatchAndPut(actions.EDIT, { index, text }, dispatch, getState)
);

export const remove = (index) => (
  (dispatch, getState) =>
    dispatchAndPut(actions.DELETE, { index }, dispatch, getState)
);
