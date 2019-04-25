import React from "react";

export const Question = () => {
  return (
    <div className="ask">
      <h1>Would You Rather...</h1>
      <ol className="choices">
        <li>
          <p>Go to school</p>
        </li>
        <li className="vs">
          <p>vs</p>
        </li>
        <li>
          <p>Go to dancing</p>
        </li>
      </ol>
    </div>
  );
};
