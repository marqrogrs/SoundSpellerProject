import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Landing from '../pages/Landing';
import About from '../pages/About';
import Error from '../pages/Error';
import AppBar from '../components/AppBar';
import Login from '../pages/Login';
import Method from '../pages/Method';
import Contents from '../pages/Contents';
import ContactUs from '../pages/ContactUs.js';
var SSBannerLong = require('../img/SSBannerLong.png');
//<img id="logo" src={SSBannerLong} />;

//import About from '../pages/About.js';

export default function PublicRoutes({ user }) {
  return (
    <>
      <AppBar user={user} />

      <Switch>
        <Route exact path="/home"></Route>
        {/* TODO-feature: could have option to message your teacher */}
        {/* <Route exact path='/contact-us'>
          <ContactUs />
        </Route> */}
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/method">
          <Method />
        </Route>
 <Route exact path="/Contents">
          <Contents/>
        </Route>

        <Route exact path="/student">
          <Login />
        </Route>
        <Route exact path="/educator">
          <Login />
        </Route>
        {/*<Route exact path='/lessons'>
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
  );
}
