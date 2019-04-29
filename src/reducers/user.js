import { LOGIN, LOGOUT, ME } from "../actions/user";

export const user = (state = {}, action) => {
  switch (action.type) {
    case ME:
      return {
        ...state,
        [action.user.id]: action.user
      };
    case LOGIN:
      return {
        ...state,
        [action.user.id]: action.user
      };
    case LOGOUT:
      return {};
    default:
      return state;
  }
};
