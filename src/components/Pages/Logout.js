import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions";

const LogoutContainer = ({ user, actions }) => {
  if (user) {
    actions.logout();
  }

  return !user && <div>You have been logged out</div>;
};

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export const Logout = connect(
  mapStateToProps,
  mapDispatchProps
)(LogoutContainer);
