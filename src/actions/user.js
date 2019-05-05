export const REQUEST_LOGIN = "REQUEST_LOGIN";
export const REQUEST_LOGOUT = "REQUEST_LOGOUT";
export const REQUEST_ME = "REQUEST_ME";
export const RECEIVE_LOGIN = "RECEIVE_LOGIN";
export const RECEIVE_LOGOUT = "RECEIVE_LOGOUT";
export const RECEIVE_ME = "RECEIVE_ME";

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

export const login = user => dispatch => {
  dispatch({
    type: REQUEST_LOGIN
  });
  sessionStorage.setItem("user", user);
  dispatch({
    type: RECEIVE_LOGIN,
    user
  });
};

export const logout = () => dispatch => {
  dispatch({
    type: REQUEST_LOGOUT
  });
  sessionStorage.removeItem("user");
  dispatch({
    type: RECEIVE_LOGOUT
  });
};
