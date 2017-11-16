import React from 'react';
import { Route, Redirect, IndexRoute } from 'react-router';
import App from './components/App';
import TeacherOverviewPage from "./components/teacherprofile/ClassGroupsPage";
import ClassList from "./components/teacherprofile/ClassList";
import Login from "./components/Login";
import isEmpty from './functions/isEmpty';
import ClanPage from "./components/studentprofile/ClassPage";
import WorkshopOverviewPage from './components/workshopprofile/OverviewPage';
import ExtraPage from "./components/studentprofile/ExtraPage";
import HomeworkPage from "./components/studentprofile/HomeworkPage";
import SlideViewerPage from "./components/shared/slideviewer/SlideViewerPage";
import Calendar from "./components/teacherprofile/Calendar";
import CalendarDetail from "./components/teacherprofile/Calendar/CalendarDetail";
import InfoPage from "./components/teacherprofile/InfoPage";
import Attendance from './components/teacherprofile/Attendance';
import * as authActions from './actions/auth';

const routes = (store) => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Login} onEnter={requireNoAuth(store)}/>
      <Route path="/teacherprofile" onEnter={requireAuth(store)}>
        <Route path="/teacherprofile/overview" component={TeacherOverviewPage}/>
        <Route path="/teacherprofile/calendar" component={Calendar}/>
        <Route path="/teacherprofile/calendar/:eventId" component={CalendarDetail}/>
        <Route path="/teacherprofile/classlist/:id" component={ClassList}/>
        <Route path="/teacherprofile/feedback/:id" component={Attendance}/>
        <Route path="/teacherprofile/info" component={InfoPage}/>
      </Route>

      <Route path="/studentprofile" onEnter={requireAuth(store)}>
        <Route path="/studentprofile/clan" component={ClanPage}/>
        <Route path="/studentprofile/homework" component={HomeworkPage}/>
        <Route path="/studentprofile/extra" component={ExtraPage}/>
      </Route>

      <Route path="/workshopprofile" onEnter={requireAuth(store)}>
        <Route path="/workshopprofile/overview" component={WorkshopOverviewPage}/>
      </Route>

      <Route path="/slideviewer" onEnter={requireAuth(store)}>
        <Route path="/slideviewer/:id/:type" component={SlideViewerPage}/>
        <Route path="/slideviewer/:id" component={SlideViewerPage}/>
      </Route>
      <Route name="login" path="/login" component={Login} onEnter={requireNoAuth(store)}/>

      <Redirect from="/" to="login" />
      <Redirect from="*" to="login" />
    </Route>
  );
};

const requireAuth = (store) => {
  return (location, replace) => {
    // Do something with your store
    if (isEmpty(store.getState().loggedIn.data)) {
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
    store.dispatch(authActions.logOut());
    /*if (!isEmpty(loggedInUser)) {
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
    }*/
  };
};


export default routes;
