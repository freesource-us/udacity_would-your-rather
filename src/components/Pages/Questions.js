import React from "react";
import { Question } from "../Layout/Question";
import { Route, Link } from "react-router-dom";

export const Questions = () => {
  return (
    <article className="page question">
      <div className="icon" />
      <hr />
      <Route path="/questions/:id" component={Question} />
      <Route
        exact
        path="/questions"
        render={() => (
          <>
            <button className="button primary auto-center" type="button">
              Play
            </button>
            <Link to="/add" className="button">
              Add Question
            </Link>
          </>
        )}
      />
    </article>
  );
};
