import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions";

const LoginContainer = ({ actions, user, users }) => {
  if (user) {
    return <Redirect to="/" />;
  }

  useEffect(() => {
    Object.keys(users).length === 0 && actions.getUsers();
  }, [users]);

  return (
    <article className="page login center">
      <h1>Log In</h1>
      <select
        id="user-select"
        defaultValue={user || ""}
        onChange={({ target }) => {
          actions.login(target.value);
        }}
      >
        <option value="" disabled>
          --Please choose an option--
        </option>
        {users &&
          Object.values(users).map(user => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
      </select>
    </article>
  );
};

const mapStateToProps = ({ user, users }) => {
  return {
    user,
    users
  };
};

const mapDispatchProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export const Login = connect(
  mapStateToProps,
  mapDispatchProps
)(LoginContainer);
