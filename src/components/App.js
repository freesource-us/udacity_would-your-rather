import React, { useEffect } from "react";
import Router from "./Router";
import { Header } from "./Layout";
import { Loader } from "./UI";
import { BrowserRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions";

const AppContainer = ({ user, loading, actions }) => {
  const initApp = () => {
    actions.getUsers();
    actions.getQuestions();
  };

  useEffect(() => {
    user && initApp(); // : actions.me();
  }, [user]);

  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        {loading ? <Loader /> : <Router me={user} />}
      </BrowserRouter>
    </div>
  );
};

const mapStateToProps = ({ user, loading }) => ({
  user,
  loading
});

const mapDispatchProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export const App = connect(
  mapStateToProps,
  mapDispatchProps
)(AppContainer);
