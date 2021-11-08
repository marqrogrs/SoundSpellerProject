import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from '../pages/Home';
import Error from '../pages/Error';
import Lesson from '../pages/Lesson';
import Lessons from '../pages/Lessons';
import Progress from '../pages/Progress';
import Students from '../pages/Students';
import ContactUs from '../pages/ContactUs';
import CreateLesson from '../pages/CreateLesson';
import SpellingPatterns from '../pages/SpellingPatterns';
import AppBar from '../components/AppBar';
import { LessonProvider } from '../providers/LessonProvider';
import UserProvider from '../providers/UserProvider';
import StudyWords from './../pages/StudyWords';

export default function PrivateRoutes({ user, isEducator }) {
  return (
    <UserProvider>
      <LessonProvider>
        <AppBar user={user} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route exact path='/lessons'>
            <Lessons />
          </Route> */}
          <Route
            exact
            path="/lessons/:lesson"
            children={<Lesson />}
          />
          <Route exact path="/progress">
            <Progress />
          </Route>
          <Route exact path="/spellingpatterns">
            <SpellingPatterns />
          </Route>
          {isEducator && (
            <Route exact path="/students">
              <Students />
            </Route>
          )}
          {isEducator && (
            <Route
              exact
              path="/students/:student"
              children={<Progress />}
            />
          )}
          <Route exact path="/create-lesson">
            <CreateLesson />
          </Route>

          <Route exact path="/study-words">
            <StudyWords />
          </Route>

          {/* <Route exact path='/contact-us'>
            <ContactUs />
          </Route> */}
          <Route children={<Error />} />
        </Switch>
      </LessonProvider>
    </UserProvider>
  );
}
