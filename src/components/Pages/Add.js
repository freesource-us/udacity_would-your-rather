import React, { useState } from "react";
import { Question } from "../Layout/Question";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions";

export const AddContainer = ({ user, users, actions, history }) => {
  const [optionOneText, setOptionOneText] = useState();
  const [optionTwoText, setOptionTwoText] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const avatar = users[user] ? users[user].avatarURL : "";

  const handleOptionOne = e => {
    setOptionOneText(e.target.value);
  };

  const handleOptionTwo = e => {
    setOptionTwoText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    actions.saveQuestion({ optionOneText, optionTwoText, author: user });
    setIsSubmitting(true);
    history.push("/");
  };

  return (
    <article className="page question">
      <Question icon={avatar}>
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
              disabled={isSubmitting}
            >
              Submit
            </button>
          </li>
          <li>
            <textarea
              name="option2"
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
    users: state.users
  };
};

const mapDispatchProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export const Add = connect(
  mapStateToProps,
  mapDispatchProps
)(AddContainer);
