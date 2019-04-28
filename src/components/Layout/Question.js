import React from "react";

export const Question = ({ a, b }) => {
  return (
    <div className="ask">
      <h1>Would You Rather...</h1>
      <ol className="choices">
        <li>{a}</li>
        <li className="vs">VS</li>
        <li>{b}</li>
      </ol>
    </div>
  );
};
