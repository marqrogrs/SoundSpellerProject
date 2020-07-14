import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Lesson from "../pages/Lesson";

export default function PrivateRoutes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/lessons/:lesson" children={<Lesson />} />
        <Route>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}
