import React from "react";

export const Question = ({ optionOne, optionTwo }) => {
  return (
    <div className="ask">
      <h1>Would You Rather...</h1>
      <ol className="choices">
        <li>{optionOne}</li>
        <li className="vs">VS</li>
        <li>{optionTwo}</li>
      </ol>
    </div>
  );
};
