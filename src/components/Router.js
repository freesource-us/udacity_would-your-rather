import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login, Logout, NotFound } from "./Pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={(...props) => <pre>{JSON.stringify(props, null, 2)}</pre>} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/questions/:id" render={(...props) => <pre>{JSON.stringify(props, null, 2)}</pre>} />
        <Route path="/leaderboard" render={(...props) => <pre>{JSON.stringify(props, null, 2)}</pre>} />
        <Route path="/add" render={(...props) => <pre>{JSON.stringify(props, null, 2)}</pre>} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
