import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Attendance from './Attendance';
import Loader from '../../shared/Loader';
import ErrorMessage from '../../shared/ErrorMessage';
import userAdministrationApi from '../../../api/userAdministration';

class AttendanceContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
    this.redirectToOverview = this.redirectToOverview.bind(this);
  }

  submit(event) {
    event.preventDefault();

    const { postAttendanceStart, postAttendanceSuccess, postAttendanceError } = this.props.actions;

    postAttendanceStart();

    // TODO: POST => ( FINISH, SUCCESS )
  }

  redirectToOverview() {
    this.context.router.push('/teacherprofile/overview');
  }

  onChange({ target }) {
    // change state on form change
    this.setState(prevState => ({}));
  }

  render() {
    const {
      error, loading, classList, course, hasError,
    } = this.props;

    if (error) {
      return (<ErrorMessage message="Fout bij inladen van de lesdata" />);
    }
    return (
      <div className="AttendanceContainer">
        <Attendance
          submit={this.submit}
          onChange={this.onChange}
          classList={classList}
          course={course}
          redirectToOverview={this.redirectToOverview}
          {...this.state}
        />
      </div>
    );
  }
}

AttendanceContainer.propTypes = {
  classList: PropTypes.array,
  course: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.object,
  actions: PropTypes.object,
};

AttendanceContainer.contextTypes = {
  router: PropTypes.object,
};

export default AttendanceContainer;
