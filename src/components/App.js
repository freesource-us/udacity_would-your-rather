import React, { useEffect } from "react";
import Router from "./Router";
import { Header } from "./Layout";
import { BrowserRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions";

const AppContainer = ({ me, actions }) => {
  /*
  if (me !== null && !me) {
    actions.me();
  }
  */
  const initApp = () => {
    actions.getUsers();
    actions.getQuestions();
  };

  useEffect(() => {
    me ? initApp() : actions.me();
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Router me={me} />
      </BrowserRouter>
    </div>
  );
};

const mapStateToProps = state => ({
  me: state.user
});

const mapDispatchProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export const App = connect(
  mapStateToProps,
  mapDispatchProps
)(AppContainer);
