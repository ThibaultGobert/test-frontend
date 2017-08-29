import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import LessonsPage from "./components/teacherprofile/LessonsPage";
import TeacherOverviewPage from "./components/teacherprofile/ClassGroupsPage";
import LoginPage from "./components/auth/LoginPage";
import isEmpty from './functions/isEmpty';
import ClanPage from "./components/studentprofile/ClanPage";
import AdminOverviewPage from "./components/adminprofile/OverviewPage";
import ChallengesPage from "./components/studentprofile/ChallengesPage";
import HomeworkPage from "./components/studentprofile/HomeworkPage";

export default (store) => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
      <Route path="/teacherprofile" onEnter={requireAuth(store)}>
        <Route path="/teacherprofile/lessons" component={LessonsPage}/>
        <Route path="/teacherprofile/overview" component={TeacherOverviewPage}/>
      </Route>
      <Route path="/studentprofile" onEnter={requireAuth(store)}>
        <Route path="/studentprofile/challenges" component={ClanPage}/>
        <Route path="/studentprofile/clan" component={ChallengesPage}/>
        <Route path="/studentprofile/homework" component={HomeworkPage}/>

      </Route>
      <Route path="/adminprofile" onEnter={requireAuth(store)}>
        <Route path="/adminprofile/overview" component={AdminOverviewPage}/>
      </Route>
      <Route path="login" component={LoginPage}/>
    </Route>
  );
};


const requireAuth = (store) => {
  return (location, replace) => {
    // Do something with your store
    if (isEmpty(store.getState().loggedIn)) {
      replace({
        pathname: '/login',
        state: { nextPathname: location.location.pathname }
      });
    }
  };
};
