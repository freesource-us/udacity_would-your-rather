import React from "react";
import { Question } from "../Layout/Question";

export const Dashboard = props => {
  return (
    <article className="page dashboard">
      <div className="icon" />
      <hr />
      <Question a={<p>Start</p>} b={<p>Finish</p>} />
    </article>
  );
};
