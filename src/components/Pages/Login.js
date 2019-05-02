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
    actions.getUsers();
  }, []);

  return (
    <article className="page login center">
      <h1>Log In</h1>
      <select
        id="pet-select"
        defaultValue={user || ""}
        onChange={({ target }) => {
          actions.login(users[target.value]);
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

const mapStateToProps = state => {
  return {
    user: state.user,
    users: state.users
  };
};

const mapDispatchProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export const Login = connect(
  mapStateToProps,
  mapDispatchProps
)(LoginContainer);
