import React from "react";
import { Question } from "../Layout/Question";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions";

const QuestionsContainer = () => {
  return (
    <article className="page question">
      <Route path="/questions/:id?" component={Question} />
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

export const Questions = connect(
  mapStateToProps,
  mapDispatchProps
)(QuestionsContainer);
