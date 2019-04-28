import { LOGIN, LOGOUT, ME } from "../actions/session";

export const session = (state = {}, action) => {
  switch (action.type) {
    case ME:
      return {
        ...state,
        user: action.user
      };
    case LOGIN:
      return {
        ...state,
        user: action.user
      };
    case LOGOUT:
      return {
        ...state,
        user: null
      };
    default:
      return state;
  }
};
