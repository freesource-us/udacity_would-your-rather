import { _getUsers } from "./../utils";

export const REQUEST_USER = "REQUEST_USER";
export const REQUEST_USERS = "REQUEST_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";

export const getUser = id => async dispatch => {
  dispatch({
    type: REQUEST_USER
  });
  const users = await _getUsers();
  dispatch({
    type: RECEIVE_USER,
    user: Object.values(users).find(user => user.id === id)
  });
};

export const getUsers = () => async dispatch => {
  dispatch({
    type: REQUEST_USERS
  });
  const users = await _getUsers();
  dispatch({
    type: RECEIVE_USERS,
    users
  });
};
