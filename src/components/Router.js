import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  Add,
  Dashboard,
  Login,
  Logout,
  NotFound,
  Questions,
  Leaderboard,
  Unauthorized
} from "./Pages";

const Router = ({ me }) => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
      <Route
        exact
        path="/(answered)?"
        component={me ? Dashboard : Unauthorized}
      />
      <Route path="/questions/:id?" component={me ? Questions : Unauthorized} />
      <Route path="/leaderboard" component={me ? Leaderboard : Unauthorized} />
      <Route path="/add" component={me ? Add : Unauthorized} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Router;
