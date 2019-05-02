import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions";

const DashboardContainer = props => {
  const { match: { params } = { params }, user, questions } = props;
  const state = Object.values(params);

  //const otherQuestions = Object.values(questions).filter(question => !user.questions.includes(question.id));
  const answeredQuestions = Object.values(questions).filter(question =>
    Object.keys(user.answers).includes(question.id)
  );
  const unansweredQuestions = Object.values(questions).filter(
    question => !Object.keys(user.answers).includes(question.id)
  );

  console.log(answeredQuestions, unansweredQuestions);

  return (
    <article className="page dashboard">
      <div>Hi {state}</div>
    </article>
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

export const Dashboard = connect(
  mapStateToProps,
  mapDispatchProps
)(DashboardContainer);
