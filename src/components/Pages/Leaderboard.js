import React from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Icon } from "../UI/Icon";
import * as actions from "../../actions";

export const LeaderboardContainer = ({ users }) => {
  const rankedUsers = Object.values(users)
    .map((user, i) => {
      const askedQuestions = user.questions.length;
      const answeredQuestions = Object.keys(user.answers).length;
      const total = askedQuestions + answeredQuestions;

      return {
        ...user,
        askedQuestions,
        answeredQuestions,
        total
      };
    })
    .sort((a, b) => b.total - a.total);

  return (
    <article className="page leaderboard">
      <table className="ranking">
        <thead>
          <tr>
            <td>Rank</td>
            <td>Avatar</td>
            <td>Name</td>
            <td>Answered Questions</td>
            <td>Asked Questions</td>
            <td>Sum</td>
          </tr>
        </thead>
        <tbody>
          {rankedUsers.map((user, i) => (
            <tr key={`loaderboard_${user.id}`}>
              <td>{i + 1}</td>
              <td>
                <Icon icon={user.avatarURL} />
              </td>
              <td>{user.name}</td>
              <td>{user.answeredQuestions}</td>
              <td>{user.askedQuestions}</td>
              <td>{user.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  );
};

const mapStateToProps = ({ user, users, questions }) => {
  return {
    user,
    users,
    questions
  };
};

const mapDispatchProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export const Leaderboard = connect(
  mapStateToProps,
  mapDispatchProps
)(LeaderboardContainer);
