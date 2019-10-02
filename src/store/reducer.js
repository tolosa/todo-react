const initalState = {
  tasks: [],
};

const reducer = (state = initalState, action) => {
  const tasks = state.tasks.splice(0);
  switch (action.type) {
    case 'ADD_TASK':
      tasks.push({ title: action.text, isDone: false });
      return { tasks };
    default:
      return state;
  }
};

export default reducer;
