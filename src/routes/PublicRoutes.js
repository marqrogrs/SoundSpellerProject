import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Landing from '../pages/Landing'
import Error from '../pages/Error'
import AppBar from '../components/AppBar'
import Login from '../pages/Login'

import ContactUs from '../pages/ContactUs.js'

export default function PublicRoutes({ user }) {
  return (
    <>
      <AppBar user={user} />
      <Switch>
        {/* <Route exact path='/contact-us'>
          <ContactUs />
        </Route> */}
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route exact path='/student'>
          <Login />
        </Route>
        <Route exact path='/educator'>
          <Login />
        </Route>
        {/* <Route exact path='/lessons'>
          <Redirect to='/' />
        </Route>
        <Route path='/lessons/:lesson'>
          <Redirect to='/' />
        </Route>
        <Route exact path='/progress'>
          <Redirect to='/' />
        </Route>
        <Route exact path='/students'>
          <Redirect to='/' />
        </Route> */}
        <Route>
          <Error />
        </Route>
      </Switch>
    </>
  )
}
