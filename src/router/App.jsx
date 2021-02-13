import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Header } from "../components/Header";
import { Home } from "../pages/Home";

export const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Header} />
      <Route exact path="/" component={Home} />
    </BrowserRouter>
  );
};
