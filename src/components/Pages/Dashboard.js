import React from "react";
import { Question } from "../Layout/Question";

export const Dashboard = props => {
  return (
    <article className="page dashboard">
      <Question optionOne={<p>Start</p>} optionTwo={<p>Finish</p>} />
    </article>
  );
};
