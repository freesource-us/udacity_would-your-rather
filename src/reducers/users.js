import { GET_USER, GET_USERS } from "../actions/users";

export const users = (state = {}, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.user
      };
    case GET_USERS:
      return {
        ...state,
        users: action.users
      };
    default:
      return state;
  }
};
