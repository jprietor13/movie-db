import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "../components/Header";
import { Home } from "../components/Home";
import { Details } from "../components/Details";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/details/:id" component={Details} />
      </Switch>
    </BrowserRouter>
  );
};
