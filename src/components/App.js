import React  from 'react';
import PropTypes from 'prop-types';
import TeacherHeader from './shared/headers/TeacherHeader';
import StudentHeader from './shared/headers/StudentHeader';
import WorkshopStudentHeader from './shared/headers/WorkshopStudentHeader';
import EditorHeader from './shared/headers/EditorHeader';
import {connect} from 'react-redux';
import * as userRoles from '../constants/roles';
import isEmpty from '../functions/isEmpty';
import LoginHeader from "./shared/headers/LoginHeader";

// TODO: pass children prop
class App extends React.Component {

  render() {
    let loggedIn = this.props.loggedIn.data;

    return (
      <div className="full-container">
        {!isEmpty(loggedIn) && loggedIn.role === userRoles.TEACHER_ROLE && <TeacherHeader user={loggedIn}/>}
        {!isEmpty(loggedIn) && loggedIn.role === userRoles.STUDENT_ROLE && <StudentHeader user={loggedIn}/>}
        {!isEmpty(loggedIn) && loggedIn.role === userRoles.WORKSHOP_STUDENT_ROLE &&
        <WorkshopStudentHeader user={loggedIn}/>}
        {!isEmpty(loggedIn) && loggedIn.role === userRoles.WORKSHOP_STUDENT_ROLE &&
        <WorkshopStudentHeader user={loggedIn}/>}
        {!isEmpty(loggedIn) && loggedIn.role === userRoles.EDITOR_ROLE && <EditorHeader user={loggedIn}/>}
        {isEmpty(loggedIn) && <LoginHeader/>}

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
