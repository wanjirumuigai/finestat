import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import Header from "../common/Header";
import Home from "../home/Home";

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
};

export default Pages;
