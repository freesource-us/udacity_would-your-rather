import React from "react";
import { NavLink as Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as action from "../../actions";

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
        {user && <span>Hi, {user.name}!</span>}
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
  user: state.user
});

const mapDispatchProps = dispatch => ({
  actions: bindActionCreators(action, dispatch)
});

export const Header = connect(
  mapStateToProps,
  mapDispatchProps
)(HeaderContainer);
