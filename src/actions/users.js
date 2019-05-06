import { _getUsers } from "./../utils";
import { ACTIONS } from ".";

export const getUser = id => async dispatch => {
  dispatch({
    type: ACTIONS.REQUEST_USER
  });
  const users = await _getUsers();
  dispatch({
    type: ACTIONS.RECEIVE_USER,
    user: Object.values(users).find(user => user.id === id)
  });
};

export const getUsers = () => async dispatch => {
  dispatch({
    type: ACTIONS.REQUEST_USERS
  });
  const users = await _getUsers();
  dispatch({
    type: ACTIONS.RECEIVE_USERS,
    users
  });
};
