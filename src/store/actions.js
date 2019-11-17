export const changeStatus = (index, isDone) => ({
  type: 'CHANGE_STATUS',
  index,
  isDone,
});

export const edit = (index, text) => ({
  type: 'EDIT',
  index,
  text,
});

export const remove = (index) => ({
  type: 'DELETE',
  index,
});
