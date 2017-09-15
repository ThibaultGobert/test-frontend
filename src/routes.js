import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import TeacherOverviewPage from "./components/teacherprofile/ClassGroupsPage";
import ClassListPage from "./components/teacherprofile/ClassListPage";
import LoginPage from "./components/auth/LoginPage";
import isEmpty from './functions/isEmpty';
import ClanPage from "./components/studentprofile/ClanPage";
import EditorOverviewPage from "./components/editorprofile/OverviewPage";
import ChallengesPage from "./components/studentprofile/ChallengesPage";
import HomeworkPage from "./components/studentprofile/HomeworkPage";
import SlideViewerPage from "./components/shared/slideviewer/SlideViewerPage";
import CalendarPage from "./components/teacherprofile/CalendarPage";
import HomePage from "./components/home/HomePage";
import CalendarDetailPage from "./components/teacherprofile/CalendarDetailPage";

const routes = (store) => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>

      <Route path="/teacherprofile" onEnter={requireAuth(store)}>
        <Route path="/teacherprofile/overview" component={TeacherOverviewPage}/>
        <Route path="/teacherprofile/calendar" component={CalendarPage}/>
        <Route path="/teacherprofile/calendar/:eventId" component={CalendarDetailPage}/>
        <Route path="/teacherprofile/classlist/:id" component={ClassListPage}/>
      </Route>

      <Route path="/studentprofile" onEnter={requireAuth(store)}>
        <Route path="/studentprofile/challenges" component={ChallengesPage}/>
        <Route path="/studentprofile/clan" component={ClanPage}/>
        <Route path="/studentprofile/homework" component={HomeworkPage}/>
      </Route>

      <Route path="/editorprofile" onEnter={requireAuth(store)}>
        <Route path="/editorprofile/overview" component={EditorOverviewPage}/>
      </Route>

      <Route path="/slideviewer" onEnter={requireAuth(store)}>
        <Route path="/slideviewer/:id/:type" component={SlideViewerPage}/>
      </Route>
      <Route path="/login" component={LoginPage} onEnter={requireNoAuth(store)}/>
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


const requireNoAuth = (store) => {
  return (location, replace) => {
    // Do something with your store
    const loggedInUser = store.getState().loggedIn;
    if (!isEmpty(loggedInUser)) {
      let path = {};
      switch(loggedInUser.role) {
        case "STUDENT":
          path = {
            pathname: '/studentprofile/homework',
            state: {nextPathname: location.location.pathname}
          };
          break;
        case "TEACHER":
          path = {
            pathname: '/teacherprofile/overview',
            state: {nextPathname: location.location.pathname}
          };
          break;
        case "EDITOR":
          path = {
            pathname: '/editorprofile/overview',
            state: {nextPathname: location.location.pathname}
          };
          break;
      }
      replace(path);
    }
  };
};


export default routes;
