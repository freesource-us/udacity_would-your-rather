import React from "react";
import { Icon } from "../UI/Icon";

export const Question = ({ icon, optionOne, optionTwo, ...props }) => {
  const {
    match: { params }
  } = props;

  if (params.id) {
    console.log("TODO: We got a concrete question, display here", params.id);
  } else {
    console.log("TODO: Make a generic one!");
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
