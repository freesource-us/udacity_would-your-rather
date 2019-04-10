import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav className="menu">
        <Link to="/">Dashboard</Link>
        <Link to="/leaderboard">Leaderboard</Link>
      </nav>
      <nav className="action">
        <Link to="/add">Add</Link>
      </nav>
      <nav className="user">
        <Link to="/">Logout</Link>
      </nav>
    </header>
  );
};
