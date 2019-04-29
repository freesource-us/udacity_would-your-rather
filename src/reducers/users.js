import { GET_USER, GET_USERS } from "../actions/users";

export const users = (state = {}, action) => {
  switch (action.type) {
    case GET_USER: {
      const { id, ...user } = action.user;
      return {
        ...state,
        [id]: user
      };
    }
    case GET_USERS:
      return {
        ...state,
        ...action.users
      };
    default:
      return state;
  }
};
