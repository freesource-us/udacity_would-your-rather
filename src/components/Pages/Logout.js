import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../../actions";

const LogoutContainer = ({ user, actions }) => {
  if (user) {
    actions.logout();
  }

  return (
    !user && (
      <article className="page unauthorized center">
        <h1>Logged out</h1>
        <p>
          You can <Link to="/login">log back in</Link> again.
        </p>
      </article>
    )
  );
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
