import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Error from '../pages/Error'
import Lesson from '../pages/Lesson'
import Lessons from '../pages/Lessons'
import Progress from '../pages/Progress'
import AppBar from '../components/AppBar'
import { LessonProvider } from '../providers/LessonProvider'
import UserProvider from '../providers/UserProvider'

export default function PrivateRoutes({ user }) {
  return (
    <Router>
      <UserProvider>
        <LessonProvider>
          <AppBar user={user} />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/lessons'>
              <Lessons />
            </Route>
            <Route path='/lessons/:lesson' children={<Lesson />} />
            <Route exact path='/progress'>
              <Progress />
            </Route>
            <Route>
              <Error />
            </Route>
          </Switch>
        </LessonProvider>
      </UserProvider>
    </Router>
  )
}
