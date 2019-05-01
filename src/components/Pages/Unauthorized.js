import React from "react";
import { Link } from "react-router-dom";

export const Unauthorized = () => {
  return (
    <article className="page unauthorized center">
      <h1>401: Unauthorized</h1>
      <p>
        Please <Link to="/login">log in</Link> to view this page.
      </p>
    </article>
  );
};
