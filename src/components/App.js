import React  from 'react';
import PropTypes from 'prop-types';
import TeacherHeader from './shared/headers/TeacherHeader';
import AdminHeader from './shared/headers/AdminHeader';
import StudentHeader from './shared/headers/StudentHeader';
import {connect} from 'react-redux';
import isEmpty from '../functions/isEmpty';

class App extends React.Component {

  render() {
    let loggedIn = this.props.loggedIn;
    console.log(loggedIn);
    return (
      <div className="container-fluid">
        {!isEmpty(loggedIn) && loggedIn.role == "TEACHER" && <TeacherHeader/>}
        {!isEmpty(loggedIn) && loggedIn.role == "ADMIN" && <AdminHeader/>}
        {!isEmpty(loggedIn) && loggedIn.role == "STUDENT" && <StudentHeader/>}

        <div className="page wrapper">
          {this.props.children}
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

export default connect(mapStateToProps)(App);
