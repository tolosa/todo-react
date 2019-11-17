import * as actions from './actionTypes';

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
