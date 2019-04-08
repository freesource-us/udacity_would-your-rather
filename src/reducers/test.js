import { RECEIVE_TEST } from "../actions/test";

export const test = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_TEST:
      return {
        ...state,
        id: action.id
      };
    default:
      return state;
  }
};
