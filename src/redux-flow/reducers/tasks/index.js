

import { ActionTypes as types } from './constants';

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_TASKS:
      return { ...state, tasks: action.payload }

    default:
      return state;
  }
};

