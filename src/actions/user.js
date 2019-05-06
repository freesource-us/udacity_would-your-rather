import { ACTIONS } from ".";
/*

I believe this is the correct way of handling sessions.
However too meet the requirements I leave this up as comment
for future reference.

export const me = () => dispatch => {
  dispatch({
    type: REQUEST_ME
  });
  const user = sessionStorage.getItem("user");
  dispatch({
    type: RECEIVE_ME,
    user
  });
};
*/

export const login = user => dispatch => {
  dispatch({
    type: ACTIONS.REQUEST_LOGIN
  });
  sessionStorage.setItem("user", user);
  dispatch({
    type: ACTIONS.RECEIVE_LOGIN,
    user
  });
};

export const logout = () => dispatch => {
  dispatch({
    type: ACTIONS.REQUEST_LOGOUT
  });
  sessionStorage.removeItem("user");
  dispatch({
    type: ACTIONS.RECEIVE_LOGOUT
  });
};
