import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import LessonsPage from "./components/manage/LessonsPage";
import OverviewPage from "./components/teacherprofile/OverviewPage";
import LoginPage from "./components/auth/LoginPage";
import checkAuth from './functions/checkAuth';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/teacherprofile" onEnter={requireAuth}>
      <Route path="/teacherprofile/lessons" component={LessonsPage} />
      <Route path="/teacherprofile/overview" component={OverviewPage} />
    </Route>
    <Route path="login" component={LoginPage}/>
  </Route>
);

// IF no jwt token is stored in local storage --> then redirect to the login page
function requireAuth(nextState, replace) {
  if (!sessionStorage.jwt) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    });
  }
}
