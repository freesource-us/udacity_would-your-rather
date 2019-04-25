import React from "react";
import { Route, Switch } from "react-router-dom";
import { Dashboard, Login, Logout, NotFound, Questions } from "./Pages";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />
      <Route path="/questions" component={Questions} />
      <Route path="/leaderboard" render={(...props) => <pre>{JSON.stringify(props, null, 2)}</pre>} />
      <Route path="/add" render={(...props) => <pre>{JSON.stringify(props, null, 2)}</pre>} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Router;
