import React from "react";
import Router from "./Router";
import { Header } from "./Layout";
import { BrowserRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as sessionActions from "../actions/session";

const AppContainer = ({ me, actions }) => {
  if (me !== null && !me) {
    actions.me();
  }

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
  me: state.session.user
});

const mapDispatchProps = dispatch => ({
  actions: bindActionCreators(sessionActions, dispatch)
});

export const App = connect(
  mapStateToProps,
  mapDispatchProps
)(AppContainer);
