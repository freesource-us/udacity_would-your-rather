import React from "react";
import { Icon } from "../UI/Icon";
import { Link } from "react-router-dom";

export const Question = ({ icon, optionOne, optionTwo, ...props }) => {
  const { match: { params } = { params: {} } } = props;

  if (!params.id) {
    optionOne = (
      <Link to="/questions/1" className="button primary">
        Answer Question
      </Link>
    );
    optionTwo = (
      <Link to="/add" className="button primary">
        Create Question
      </Link>
    );
  }

  return (
    <>
      <Icon icon={icon} />
      <hr />
      <div className="ask">
        <h1>Would You Rather...</h1>
        <ol className="choices">
          <li>{optionOne}</li>
          <li className="vs">VS</li>
          <li>{optionTwo}</li>
        </ol>
      </div>
    </>
  );
};
