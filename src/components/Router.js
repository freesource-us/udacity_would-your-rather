import React from "react";
import { Route, Switch } from "react-router-dom";
import {
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
      <Route exact path="/" component={me ? Dashboard : Unauthorized} />
      <Route path="/questions" component={me ? Questions : Unauthorized} />
      <Route path="/leaderboard" component={me ? Leaderboard : Unauthorized} />
      <Route
        path="/add"
        render={(...props) => <pre>{JSON.stringify(props, null, 2)}</pre>}
      />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Router;
