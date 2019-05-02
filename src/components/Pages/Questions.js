import React from "react";
import { Question } from "../Layout/Question";
import { Route } from "react-router-dom";

export const Questions = () => {
  return (
    <article className="page question">
      <Route path="/questions/:id" component={Question} />
    </article>
  );
};
