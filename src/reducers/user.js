import { RECEIVE_LOGIN, RECEIVE_LOGOUT, RECEIVE_ME } from "../actions";

export const user = (state = null, action) => {
  switch (action.type) {
    case RECEIVE_ME:
      return action.user;
    case RECEIVE_LOGIN:
      return action.user;
    case RECEIVE_LOGOUT:
      return null;
    default:
      return state;
  }
};
