import React  from 'react';
import PropTypes from 'prop-types';
import TeacherHeader from './shared/headers/TeacherHeader';
import AdminHeader from './shared/headers/AdminHeader';
import StudentHeader from './shared/headers/StudentHeader';
import {connect} from 'react-redux';
import * as userRoles from '../constants/roles';
import isEmpty from '../functions/isEmpty';

class App extends React.Component {

  render() {
    let loggedIn = this.props.loggedIn;
    return (

      <div className="full-container">

        {!isEmpty(loggedIn) && loggedIn.role == userRoles.TEACHER_ROLE && <TeacherHeader/>}
        {!isEmpty(loggedIn) && loggedIn.role == userRoles.ADMIN_ROLE && <AdminHeader/>}
        {!isEmpty(loggedIn) && loggedIn.role == userRoles.STUDENT_ROLE && <StudentHeader/>}

        <div className="page-wrapper">
          <div className="page">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired // react router will pass there children in
};

function mapStateToProps(state, ownProps) {
  return {
    loggedIn: state.loggedIn
  };
}

App.propTypes = {
  loggedIn: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(App);
