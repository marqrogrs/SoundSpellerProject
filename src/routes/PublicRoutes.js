import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landing from "../pages/Landing";
import Error from "../pages/Error";
import AppBar from "../components/AppBar";

export default function PublicRoutes({ user }) {
  return (
    <Router>
      <AppBar user={user} />
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
