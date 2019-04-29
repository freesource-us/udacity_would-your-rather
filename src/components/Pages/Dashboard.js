import React from "react";
import { Question } from "../Layout/Question";

export const Dashboard = props => {
  return (
    <article className="page dashboard">
      <div className="icon" />
      <hr />
      <Question optionOne={<p>Start</p>} optionTwo={<p>Finish</p>} />
    </article>
  );
};
