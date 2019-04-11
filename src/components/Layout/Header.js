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
        <Link to="/leaderboard">Leaderboard</Link>
      </nav>
      <nav className="action">
        <Link to="/play" className="button primary">
          Play
        </Link>
        <Link to="/add" className="button">
          Add Question
        </Link>
      </nav>
      <nav className="user">
        <Link to="/">Logout</Link>
      </nav>
    </header>
  );
};
