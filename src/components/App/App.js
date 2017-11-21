import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TeacherHeader from '../shared/headers/TeacherHeader';
import StudentHeader from '../shared/headers/StudentHeader';
import WorkshopStudentHeader from '../shared/headers/WorkshopStudentHeader';
import EditorHeader from '../shared/headers/EditorHeader';
import { connect } from 'react-redux';
import * as userRoles from '../../constants/roles';
import isEmpty from '../../functions/isEmpty';
import LoginHeader from '../shared/headers/LoginHeader';
import { Switch, Route } from 'react-router-dom';
import Teacher from '../Teacher';
import Login from '../Login';

class App extends Component {
  render() {
    const loggedIn = this.props.loggedIn.data;

    return (
      <div className="full-container">
        {!isEmpty(loggedIn) &&
          loggedIn.role === userRoles.TEACHER_ROLE && <TeacherHeader user={loggedIn} />}
        {!isEmpty(loggedIn) &&
          loggedIn.role === userRoles.STUDENT_ROLE && <StudentHeader user={loggedIn} />}
        {!isEmpty(loggedIn) &&
          loggedIn.role === userRoles.WORKSHOP_STUDENT_ROLE && (
            <WorkshopStudentHeader user={loggedIn} />
          )}
        {!isEmpty(loggedIn) &&
          loggedIn.role === userRoles.EDITOR_ROLE && <EditorHeader user={loggedIn} />}
        {isEmpty(loggedIn) && <LoginHeader />}

        <div className="page-wrapper">
          <div className="page">
            <Switch>
              <Route exact path="/" component={Login} />
              {!isEmpty(loggedIn) && <Route path="/teacherprofile" component={Teacher} />}
            </Switch>
            {/*
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

      <Route path="/editorprofile" onEnter={requireAuth(store)}>
        <Route path="/editorprofile/overview" component={EditorOverviewPage}/>
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
    </Route>*/}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
