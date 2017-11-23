import React, { Component } from 'react';
import StudentHeader from '../shared/headers/StudentHeader';
import WorkshopStudentHeader from '../shared/headers/WorkshopStudentHeader';
import EditorHeader from '../shared/headers/EditorHeader';
import * as userRoles from '../../constants/roles';
import isEmpty from '../../functions/isEmpty';
import LoginHeader from '../shared/headers/LoginHeader';
import { Switch, Route } from 'react-router-dom';
import Teacher from '../Teacher';
import Login from '../Login';
import { getUser } from '../../api/api';
import SharedRoutes from '../shared/routes';

class App extends Component {
  constructor(...props) {
    super(...props);

    // Set the user from localStorage
    if(getUser() !== null) {
      this.props.actions.loginSuccess(getUser());
    }
  }

  render() {
    const loggedIn = this.props.loggedIn && this.props.loggedIn.data;

    return (
      <div className="full-container">
        {!isEmpty(loggedIn) &&
          loggedIn.role === userRoles.STUDENT_ROLE && <StudentHeader user={loggedIn} />}
        {!isEmpty(loggedIn) &&
          loggedIn.role === userRoles.WORKSHOP_STUDENT_ROLE && (
            <WorkshopStudentHeader user={loggedIn} />
          )}
        {!isEmpty(loggedIn) &&
          loggedIn.role === userRoles.EDITOR_ROLE && <EditorHeader user={loggedIn} />}
        {isEmpty(loggedIn) && <LoginHeader />}


            <Switch>
              <Route exact path="/" component={Login} />
              {!isEmpty(loggedIn) && <Route path="/teacherprofile" component={Teacher} />}
              <SharedRoutes/>
            </Switch>
            {/*
          <Route path="/" component={App}>

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
    );
  }
}

export default App;
