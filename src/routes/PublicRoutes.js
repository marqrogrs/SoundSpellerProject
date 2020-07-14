import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landing from "../pages/Landing";
import Error from "../pages/Error";

export default function PublicRoutes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}
