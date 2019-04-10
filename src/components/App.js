import React from "react";
import Router from "./Router";
import { Header } from "./Layout/Header";
import { BrowserRouter } from "react-router-dom";

export const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </div>
  );
};
