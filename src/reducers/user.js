import { ACTIONS } from "../actions";

export const user = (state = null, action) => {
  switch (action.type) {
    case ACTIONS.RECEIVE_ME:
      return action.user;
    case ACTIONS.RECEIVE_LOGIN:
      return action.user;
    case ACTIONS.RECEIVE_LOGOUT:
      return null;
    default:
      return state;
  }
};
