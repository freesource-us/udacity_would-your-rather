import React from "react";
import { Icon } from "../UI/Icon";

const VoteButton = props => (
  <button {...props}>
    Vote
    <span />
  </button>
);

export const Question = ({ question, children, icon }) => {
  const q = question;

  return (
    <>
      <Icon icon={q ? q.author.avatarURL : icon} />
      <hr />
      <div className="ask">
        <h1>Would You Rather...</h1>
        {children || (
          <ol className="choices">
            <li>
              {q.optionOne.text}
              {q.answered ? (
                <button className={`${q.optionOne.answered && "answered"} button primary`} disabled>
                  {q.optionOne.votes.length} / {q.totalVotes} ( {(q.optionOne.votes.length / q.totalVotes) * 100} %)
                </button>
              ) : (
                <VoteButton className={`button primary`} />
              )}
            </li>
            <li className="vs">VS</li>
            <li>
              {q.optionTwo.text}
              {q.answered ? (
                <button className={`${q.optionTwo.answered && "answered"} button primary`} disabled>
                  {q.optionTwo.votes.length} / {q.totalVotes} ( {(q.optionTwo.votes.length / q.totalVotes) * 100} %)
                </button>
              ) : (
                <VoteButton className={`button primary`} />
              )}
            </li>
          </ol>
        )}
      </div>
    </>
  );
};
