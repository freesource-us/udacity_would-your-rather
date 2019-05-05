import { RECEIVE_SAVE_QUESTION } from "../actions/questions";

export const question = (state = null, action) => {
  switch (action.type) {
    case RECEIVE_SAVE_QUESTION:
      return {
        ...action.question
      };
    default:
      return state;
  }
};
