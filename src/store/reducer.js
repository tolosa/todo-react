/* eslint-disable default-case */
import * as actions from './actionTypes';

const initalState = {
  tasks: [],
};

const reducer = (state = initalState, action) => {
  const tasks = state.tasks.splice(0);
  switch (action.type) {
    case actions.SET_TASKS:
      tasks.push(...action.tasks);
      break;
    case actions.ADD_TASK:
      tasks.push({ title: action.text, isDone: false });
      break;
    case actions.DELETE:
      tasks.splice(action.index, 1); // TODO: add and use ID field instead of the index
      break;
    case actions.CHANGE_STATUS:
      tasks[action.index].isDone = action.isDone; // TODO: avoid to mutate original objects
      break;
    case actions.EDIT:
      tasks[action.index].title = action.text; // TODO: avoid code duplication
      break;
  }
  return { tasks };
};

export default reducer;
