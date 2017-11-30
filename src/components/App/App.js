import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Teacher from '../Teacher';
import Login from '../Login';
import { getUser } from '../../api/api';
import SharedRoutes from '../shared/routes';
import Student from "../Student";
import isEmpty from 'lodash/isEmpty';
import NotFound from "../NotFound/NotFound";

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
        <Switch>
          <Route exact path="/" component={Login}/>
          {!isEmpty(loggedIn) && <Route path="/teacherprofile" component={Teacher} />}
          {!isEmpty(loggedIn) && <Route path="/studentprofile" component={Student} />}
          <SharedRoutes/>
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
