import React from "react";
import { Icon } from "../UI/Icon";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions";
import { NotFound } from "../Pages";

const VoteButton = props => (
  <button {...props}>
    Vote
    <span />
  </button>
);

const QuestionContainer = ({ icon, user, questions, users, ...props }) => {
  const { match: { params } = { params: {} } } = props;
  const { [params.id]: question } = questions;

  if (!question) return <NotFound />;

  const { [question.author]: author } = users;
  const answer = user.answers[question.id];
  const q = {
    ...question,
    [answer]: {
      ...question[answer],
      answered: true
    },
    answered: !!answer
  };

  return (
    <>
      <Icon icon={author.avatarURL} />
      <hr />
      <div className="ask">
        {/* <Link to="/questions/1" className="button primary">
              Answer Question
              </Link>
              <Link to="/add" className="button primary">
                Create Question
              </Link>
            ) */}
        <h1>Would You Rather...</h1>
        <ol className="choices">
          <li>
            {q.optionOne.text}
            <VoteButton className={`${q.optionOne.answered && "answered"} button primary`} disabled={q.answered} />
          </li>
          <li className="vs">VS</li>
          <li>
            {q.optionTwo.text}
            <VoteButton className={`${q.optionTwo.answered && "answered"} button primary`} disabled={q.answered} />
          </li>
        </ol>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user,
    users: state.users,
    questions: state.questions
  };
};

const mapDispatchProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export const Question = connect(
  mapStateToProps,
  mapDispatchProps
)(QuestionContainer);
