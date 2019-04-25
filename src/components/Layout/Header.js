import React from "react";
import { NavLink as Link } from "react-router-dom";

export const Header = props => {
  console.log(props);
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
        <Link to="/">Logout</Link>
      </nav>
    </header>
  );
};
