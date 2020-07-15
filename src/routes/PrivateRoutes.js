import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Lesson from "../pages/Lesson";
import Lessons from "../pages/Lessons";
import AppBar from "../components/AppBar";

export default function PrivateRoutes({ user }) {
  return (
    <Router>
      <AppBar user={user} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/lessons">
          <Lessons/>
        </Route>
        <Route path="/lessons/:lesson" children={<Lesson />} />
        <Route>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}
