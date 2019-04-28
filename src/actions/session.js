export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const ME = "ME";

export const me = () => dispatch => {
  const user = localStorage.getItem("session");

  dispatch({
    type: ME,
    user
  });
};

export const login = user => dispatch => {
  localStorage.setItem("session", user);

  dispatch({
    type: LOGIN,
    user
  });
};

export const logout = () => dispatch => {
  localStorage.removeItem("session");

  dispatch({
    type: LOGOUT
  });
};
