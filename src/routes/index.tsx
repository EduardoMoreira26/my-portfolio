/* eslint-disable no-use-before-define */
import React from "react";
import { Switch, Route } from "react-router-dom";

import Main from "../pages/Main";
import About from "../pages/About";
import Contact from "../pages/Contact";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={About} />
    <Route path="/contato" exact component={Contact} />
  </Switch>
);

export default Routes;
