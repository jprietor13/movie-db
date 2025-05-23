import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "../components/Header";
import { Home } from "../components/Home";
import { Details } from "../components/Details";
import "../assets/styles/App.css";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/details/:idMovie" component={Details} />
      </Switch>
    </BrowserRouter>
  );
};
