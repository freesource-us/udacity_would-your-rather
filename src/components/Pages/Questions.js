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
          <Question
            a={
              <Link to="/questions/1" className="button primary">
                Answer Question
              </Link>
            }
            b={
              <Link to="/add" className="button primary">
                Add Question
              </Link>
            }
          />
        )}
      />
    </article>
  );
};
