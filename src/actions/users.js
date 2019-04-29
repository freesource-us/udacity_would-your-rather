import { _getUsers } from "./../utils";

export const GET_USERS = "GET_USERS";
export const GET_USER = "GET_USER";

export const getUser = id => async dispatch => {
  const users = await _getUsers();

  dispatch({
    type: GET_USER,
    user: Object.values(users).find(user => user.id === id)
  });
};

export const getUsers = () => async dispatch => {
  const users = await _getUsers();

  dispatch({
    type: GET_USERS,
    users
  });
};
