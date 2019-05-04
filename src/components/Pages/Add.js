import React from "react";
import { Question } from "../Layout/Question";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions";

export const AddContainer = ({ user }) => {
  return (
    <article className="page question">
      <Question icon={user.avatarURL}>
        <ul className="choices">
          <li>
            <textarea placeholder="Option 1" />
          </li>
          <li>
            <button className="button primary">Submit</button>
          </li>
          <li>
            <textarea placeholder="Option 1" />
          </li>
        </ul>
      </Question>
    </article>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export const Add = connect(
  mapStateToProps,
  mapDispatchProps
)(AddContainer);
