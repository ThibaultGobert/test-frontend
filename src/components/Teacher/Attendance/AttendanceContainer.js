import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Attendance from './Attendance';
import ErrorMessage from '../../shared/ErrorMessage';
import userAdministrationApi from '../../../api/userAdministration';
import courseApi from '../../../api/courses';
import Loader from "../../shared/Loader";
import _ from 'lodash';

class AttendanceContainer extends Component {
  constructor(...props) {
    super(...props);

    this.state = {
      loading: false,
    };

    this.submit = this.submit.bind(this);
    this.redirectToOverview = this.redirectToOverview.bind(this);
  }

  componentDidMount() {
    const courseId = this.props.course.id;
    const {
      fetchChildrenStart,
      fetchChildrenSuccess,
      fetchChildrenError,
      fetchAttendancesStart,
      fetchAttendancesSuccess,
      fetchAttendancesError,
    } = this.props.actions;

    fetchChildrenStart();

    courseApi
      .getChildrenForCourse(courseId)
      .then(data => fetchChildrenSuccess(data, courseId))
      .catch(fetchChildrenError);

    fetchAttendancesStart();
    userAdministrationApi
      .getAttendanceForCourse(courseId)
      .then((data) => {
        this.fetchAttendancesSuccess(data);
        this.setState({ loading: false });
      }).catch(fetchAttendancesError);
  }

  submit(event) {
    event.preventDefault();

    const { postAttendanceStart, postAttendanceSuccess, postAttendanceError } = this.props.actions;

    postAttendanceStart();

    // TODO: POST => ( FINISH, SUCCESS )
  }

  redirectToOverview() {
    const { history } = this.props;
    history.push('/teacherprofile/overview');
  }

  render() {
    const { error, course, lessons, children } = this.props;
    if (error) {
      return (<ErrorMessage message="Fout bij inladen van de lesdata" />);
    }

    if (this.state.loading) {
      return <Loader active />;
    }

    return (
      <div className="AttendanceContainer">
        <Attendance
          submit={this.submit}
          course={course}
          lessons={lessons}
          students={children}
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
