export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const ME = "ME";

export const me = () => dispatch => {
  const user = JSON.parse(localStorage.getItem("user"));

  dispatch({
    type: ME,
    user
  });
};

export const login = user => dispatch => {
  localStorage.setItem("user", JSON.stringify(user));

  dispatch({
    type: LOGIN,
    user
  });
};

export const logout = () => dispatch => {
  localStorage.removeItem("user");

  dispatch({
    type: LOGOUT
  });
};
