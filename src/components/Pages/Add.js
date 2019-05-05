import React, { useState } from "react";
import { Question } from "../Layout/Question";

import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions";

export const AddContainer = ({ user, users, lastQuestion, actions }) => {
  const [optionOneText, setOptionOneText] = useState();
  const [optionTwoText, setOptionTwoText] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOptionOne = e => {
    setOptionOneText(e.target.value);
  };

  const handleOptionTwo = e => {
    setOptionTwoText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true);
    actions.saveQuestion({ optionOneText, optionTwoText, author: user });
  };

  return (
    <article className="page question">
      {lastQuestion && (
        <div className="last-question">
          Saved:{" "}
          <Link to={`/questions/${lastQuestion.id}`}>{lastQuestion.id}</Link>
        </div>
      )}
      <Question icon={users[user].avatarURL}>
        <ul className="choices">
          <li>
            <textarea
              name="option1"
              className="text-right"
              placeholder="Option 1"
              onChange={handleOptionOne}
            />
          </li>
          <li>
            <button
              className="button primary"
              onClick={handleSubmit}
              isSubmitting={isSubmitting}
            >
              Submit
            </button>
          </li>
          <li>
            <textarea
              name="option1"
              placeholder="Option 2"
              onChange={handleOptionTwo}
            />
          </li>
        </ul>
      </Question>
    </article>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user,
    users: state.users,
    lastQuestion: state.question
  };
};

const mapDispatchProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export const Add = connect(
  mapStateToProps,
  mapDispatchProps
)(AddContainer);
