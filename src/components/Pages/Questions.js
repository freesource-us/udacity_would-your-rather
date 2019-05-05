import React from "react";
import { Question } from "../Layout/Question";
import { NotFound } from "./NotFound";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../../actions";

export const QuestionsContainer = ({
  user,
  users,
  questions,
  actions,
  ...props
}) => {
  const { match: { params } = { params: {} } } = props;
  const { [params.id]: question } = questions;

  const unanswered = Object.values(questions).filter(
    question => !Object.keys(users[user].answers).includes(question.id)
  );
  const random = unanswered[Math.floor(Math.random() * unanswered.length)];

  if (!params.id) {
    return (
      <article className="page question center lucky">
        {random ? (
          <Link to={`/questions/${random.id}`}>Random Question</Link>
        ) : (
          <div className="king">
            <p>You are the Answering King. Now create your own question: </p>
            <Link to={`/add`}>Create Question</Link>
          </div>
        )}
      </article>
    );
  }

  if (!question) {
    return <NotFound />;
  }

  const { [question.author]: author } = users;
  const answer = users[user].answers[question.id];

  const handleVote = answer => e => {
    e.preventDefault();

    actions.saveQuestionAnswer({
      answer,
      authedUser: user,
      qid: question.id
    });
  };

  return (
    <article className="page question">
      <Question
        onVote={handleVote}
        author={author}
        question={question}
        answer={{
          authedUser: user,
          answer
        }}
      />
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

export const Questions = connect(
  mapStateToProps,
  mapDispatchProps
)(QuestionsContainer);
