import React from "react";
import { NavLink as Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as sessionActions from "../../actions/user";

const HeaderContainer = ({ user }) => {
  return (
    <header>
      <nav className="menu">
        <Link exact to="/">
          Dashboard
        </Link>

        <Link to="/questions">Questions</Link>
        <Link to="/leaderboard">Leaderboard</Link>
      </nav>
      <nav className="user">
        {user && <span>Hi, {user}!</span>}
        {user ? (
          <Link to="/logout" activeClassName="hidden">
            Logout
          </Link>
        ) : (
          <Link to="/login" activeClassName="hidden">
            Login
          </Link>
        )}
      </nav>
    </header>
  );
};

const mapStateToProps = state => ({
  user: state.user.user
});

const mapDispatchProps = dispatch => ({
  actions: bindActionCreators(sessionActions, dispatch)
});

export const Header = connect(
  mapStateToProps,
  mapDispatchProps
)(HeaderContainer);
