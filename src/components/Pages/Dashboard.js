import React from "react";
import { Question } from "../Layout/Question";

export const Dashboard = ({ ...props }) => {
  return (
    <article className="page login">
      <div className="icon" />
      <hr />
      <Question />
    </article>
  );
};
