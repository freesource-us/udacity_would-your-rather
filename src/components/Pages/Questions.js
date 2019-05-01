import React from "react";
import { Question } from "../Layout/Question";
import { Route, Link } from "react-router-dom";

export const Questions = ({ user, users }) => {
  return (
    <article className="page question">
      <Route path="/questions/:id" component={Question} />
      <Route
        exact
        path="/questions"
        render={props => (
          <Question
            {...props}
            optionOne={
              <Link to="/questions/1" className="button primary">
                Answer Question
              </Link>
            }
            optionTwo={
              <Link to="/add" className="button primary">
                Create Question
              </Link>
            }
          />
        )}
      />
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

export const Login = connect(
  mapStateToProps,
  mapDispatchProps
)(LoginContainer);
