import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import { Label } from 'semantic-ui-react';
import Teacher from '../Teacher';
import Login from '../Login';
import { getUser } from '../../api/storage';
import Student from '../Student';
import Workshop from '../Workshop';
import NotFound from '../NotFound/NotFound';
import SlideViewer from '../shared/SlideViewer';

class App extends Component {
  constructor(...props) {
    super(...props);

    // Set the user from localStorage
    if (getUser() !== null) {
      this.props.actions.loginSuccess(getUser());
    }
  }

  render() {
    const loggedIn = this.props.loggedIn && this.props.loggedIn.data;

    return (
      <div className="full-container">
        {process.env.REACT_APP_ENV !== 'production' && (
          <Label className="App__TestBuildLabel" color="red">
            TEST BUILD
          </Label>
        )}
        <Switch>
          <Route exact path="/" component={Login} />
          {!isEmpty(loggedIn) && <Route path="/teacherprofile" component={Teacher} />}
          {!isEmpty(loggedIn) && <Route path="/studentprofile" component={Student} />}
          {!isEmpty(loggedIn) && <Route path="/workshopprofile" component={Workshop} />}
          <Route path="/slideviewer/:id/:type" component={SlideViewer} />;
          <Route path="/slideviewer/:id" component={SlideViewer} />;
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
