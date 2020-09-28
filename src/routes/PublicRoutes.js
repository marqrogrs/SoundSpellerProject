import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from '../pages/Landing'
import Error from '../pages/Error'
import AppBar from '../components/AppBar'
import StudentLogin from '../pages/StudentLogin'
import EducatorLogin from '../pages/EducatorLogin'

export default function PublicRoutes({ user }) {
  return (
    <Router>
      <AppBar user={user} />
      <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route exact path='/student'>
          <StudentLogin />
        </Route>
        <Route exact path='/educator'>
          <EducatorLogin />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}
