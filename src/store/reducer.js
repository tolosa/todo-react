/* eslint-disable default-case */
const initalState = {
  tasks: [],
};

const reducer = (state = initalState, action) => {
  const tasks = state.tasks.splice(0);
  switch (action.type) {
    case 'ADD_TASK':
      tasks.push({ title: action.text, isDone: false });
      break;
    case 'CHANGE_STATUS':
      tasks[action.index].isDone = action.isDone; // TODO: avoid to mutate original objects
      break;
  }
  return { tasks };
};

export default reducer;
