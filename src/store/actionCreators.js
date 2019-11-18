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

export const addTask = (text) => ({
  type: actions.ADD_TASK,
  text,
});

export const changeStatus = (index, isDone) => ({
  type: actions.CHANGE_STATUS,
  index,
  isDone,
});

export const edit = (index, text) => ({
  type: actions.EDIT,
  index,
  text,
});

export const remove = (index) => ({
  type: actions.DELETE,
  index,
});
