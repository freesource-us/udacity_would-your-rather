import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { NavLink } from "react-router-dom";
import * as actions from "../../actions";

const DashboardContainer = props => {
  const {
    match: { params },
    user,
    users,
    questions
  } = props;

  const answeredOnly = params[0] === "answered";

  const preparedQuestions = Object.values(questions)
    .filter(question =>
      answeredOnly
        ? Object.keys(users[user].answers).includes(question.id)
        : !Object.keys(users[user].answers).includes(question.id)
    )
    .map((question, i) => {
      return {
        ...question
      };
    });

  return (
    <article className="page dashboard">
      <div className="linkbox">
        <NavLink exact to="/answered">
          Answered
        </NavLink>
        <NavLink exact to="/">
          Unswered
        </NavLink>
      </div>
      <table className="ranking">
        <thead>
          <tr>
            <td>X</td>
          </tr>
        </thead>
        <tbody>
          {preparedQuestions.map((question, i) => (
            <tr key={`dashboard_${question.id}`}>
              <td>{JSON.stringify(question)}</td>
            </tr>
          ))}
        </tbody>
      </table>
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
