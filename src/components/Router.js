import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" render={(...props) => <pre>{JSON.stringify(props, null, 2)}</pre>} />
      <Route exact path="/login" render={(...props) => <pre>{JSON.stringify(props, null, 2)}</pre>} />
      <Route exact path="/logout" render={(...props) => <pre>{JSON.stringify(props, null, 2)}</pre>} />
      <Route exact path="/questions/:id" render={(...props) => <pre>{JSON.stringify(props, null, 2)}</pre>} />
      <Route exact path="/leaderboard" render={(...props) => <pre>{JSON.stringify(props, null, 2)}</pre>} />
      <Route exact path="/add" render={(...props) => <pre>{JSON.stringify(props, null, 2)}</pre>} />
    </BrowserRouter>
  );
};

export default Router;
