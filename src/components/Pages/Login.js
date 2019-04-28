import React from "react";
import { Redirect } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as sessionActions from "../../actions/session";

const LoginContainer = ({ actions, user }) => {
  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <select
      id="pet-select"
      defaultValue={user || ""}
      onChange={({ target }) => {
        actions.login(target.value);
      }}
    >
      <option value="" disabled>
        --Please choose an option--
      </option>
      <option value="dog">Dog</option>
      <option value="cat">Cat</option>
      <option value="hamster">Hamster</option>
    </select>
  );
};

const mapStateToProps = state => {
  return {
    user: state.session.user
  };
};

const mapDispatchProps = dispatch => ({
  actions: bindActionCreators(sessionActions, dispatch)
});

export const Login = connect(
  mapStateToProps,
  mapDispatchProps
)(LoginContainer);
