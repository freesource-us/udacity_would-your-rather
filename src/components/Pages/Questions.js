import React from "react";
import { Question } from "../Layout/Question";
import { NotFound } from "./NotFound";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions";

export const QuestionsContainer = ({ user, users, questions, ...props }) => {
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
    totalVotes: question.optionOne.votes.length + question.optionTwo.votes.length,
    answered: !!answer,
    author
  };

  return <article className="page question">{q ? <Question question={q} /> : <NotFound />}</article>;
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

export const Questions = connect(
  mapStateToProps,
  mapDispatchProps
)(QuestionsContainer);
