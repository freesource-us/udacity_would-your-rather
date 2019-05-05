import React from "react";
import { NavLink as Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as action from "../../actions";

const HeaderContainer = ({ user, users }) => {
  return (
    <header>
      <nav className="menu">
        <Link
          to="/"
          isActive={(match, location) =>
            location.pathname.match(/(\/|\/answered)$/g)
          }
        >
          Dashboard
        </Link>

        <Link to="/questions">Questions</Link>
        <Link to="/leaderboard">Leaderboard</Link>
        <Link to="/add" className="button primary">
          +
        </Link>
      </nav>
      <nav className="user">
        {user && <span>Hi, {users[user] && users[user].name}!</span>}
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
  user: state.user,
  users: state.users
});

const mapDispatchProps = dispatch => ({
  actions: bindActionCreators(action, dispatch)
});

export const Header = connect(
  mapStateToProps,
  mapDispatchProps
)(HeaderContainer);
