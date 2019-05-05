import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { NavLink, Link } from "react-router-dom";
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
    })
    .sort((questionA, questionB) => questionB.timestamp - questionA.timestamp);

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
            <td>Asked On</td>
            <td>Created By</td>
            <td>Link</td>
          </tr>
        </thead>
        <tbody>
          {preparedQuestions.map((question, i) => {
            const d = new Date(question.timestamp);
            return (
              <tr key={`dashboard_${question.id}`}>
                <td>
                  {d.getDate() +
                    "/" +
                    (d.getMonth() + 1) +
                    "/" +
                    d.getFullYear()}
                </td>
                <td>{question.author}</td>
                <td>
                  <Link to={`/questions/${question.id}`}>{question.id}</Link>
                </td>
              </tr>
            );
          })}
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
