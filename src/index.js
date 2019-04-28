import React from "react";
import ReactDOM from "react-dom";
import { createStore, compose } from "redux";
import reducers from "./reducers";
import middlewares from "./middlewares";
import { App } from "./components/App";
import { Provider } from "react-redux";
import "./index.css";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(middlewares));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
