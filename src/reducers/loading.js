import { ACTIONS } from "../actions";

export const loading = (state = false, action) => {
  switch (action.type) {
    case ACTIONS.REQUEST_LOGIN:
    case ACTIONS.REQUEST_LOGOUT:
    case ACTIONS.REQUEST_ME:
    case ACTIONS.REQUEST_QUESTION:
    case ACTIONS.REQUEST_QUESTIONS:
    case ACTIONS.REQUEST_SAVE_QUESTION:
    case ACTIONS.REQUEST_SAVE_QUESTION_ANSWER:
    case ACTIONS.REQUEST_USER:
    case ACTIONS.REQUEST_USERS:
      return true;
    case ACTIONS.RECEIVE_LOGIN:
    case ACTIONS.RECEIVE_LOGOUT:
    case ACTIONS.RECEIVE_ME:
    case ACTIONS.RECEIVE_QUESTION:
    case ACTIONS.RECEIVE_QUESTIONS:
    case ACTIONS.RECEIVE_SAVE_QUESTION:
    case ACTIONS.RECEIVE_SAVE_QUESTION_ANSWER:
    case ACTIONS.RECEIVE_USER:
    case ACTIONS.RECEIVE_USERS:
      return false;
    default:
      return state;
  }
};
