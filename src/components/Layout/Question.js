import React, { useState } from "react";
import { Icon } from "../UI/Icon";

const VoteButton = props => (
  <button {...props}>
    Vote
    <span />
  </button>
);

export const Question = ({
  onVote,
  author,
  question,
  answer,
  children,
  icon
}) => {
  const [answerOptionOne, setAnswerOptionOne] = useState(
    answer && answer.answer === "optionOne"
  );
  const [answerOptionTwo, setAnswerOptionTwo] = useState(
    answer && answer.answer === "optionTwo"
  );

  const didAnswer = answerOptionOne || answerOptionTwo;

  const total = question
    ? question.optionOne.votes.length + question.optionTwo.votes.length
    : 0;

  console.log(
    "Question changed:",
    answerOptionOne,
    answerOptionTwo,
    question,
    answer
  );

  return (
    <>
      <Icon icon={author ? author.avatarURL : icon} />
      <hr />
      <div className="ask">
        <h1>Would You Rather...</h1>
        {children || (
          <ol className="choices">
            <li>
              {question.optionOne.text}
              {didAnswer ? (
                <button
                  className={`${answerOptionOne && "answered"} button primary`}
                  disabled
                >
                  {question.optionOne.votes.length} / {total} ({" "}
                  {(question.optionOne.votes.length / total) * 100} %)
                </button>
              ) : (
                <VoteButton
                  className={`button primary`}
                  onClick={onVote("optionOne")}
                />
              )}
            </li>
            <li className="vs">VS</li>
            <li>
              {question.optionTwo.text}
              {didAnswer ? (
                <button
                  className={`${answerOptionTwo && "answered"} button primary`}
                  disabled
                >
                  {question.optionTwo.votes.length} / {total} ({" "}
                  {(question.optionTwo.votes.length / total) * 100} %)
                </button>
              ) : (
                <VoteButton
                  className={`button primary`}
                  onClick={onVote("optionTwo")}
                />
              )}
            </li>
          </ol>
        )}
      </div>
    </>
  );
};
