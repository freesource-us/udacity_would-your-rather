import { LOGIN, LOGOUT, ME } from "../actions/user";

export const user = (state = null, action) => {
  switch (action.type) {
    case ME:
      return action.user;
    case LOGIN:
      return action.user;
    case LOGOUT:
      return null;
    default:
      return state;
  }
};
