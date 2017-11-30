import React, { Component } from 'react';

import Attendance from './Attendance';
import ErrorMessage from '../../shared/ErrorMessage';
import userAdministrationApi from '../../../api/userAdministration';
import courseApi from '../../../api/courses';
import Loader from '../../shared/Loader';

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
      .then(data => {
        fetchAttendancesSuccess(data);
        this.setState({ loading: false });
      })
      .catch(fetchAttendancesError);
  }

  submit(event, student, lesson, isPresent) {
    event.preventDefault();

    const { postAttendanceStart, postAttendanceSuccess, postAttendanceError } = this.props.actions;

    const body = [{
      user_id: student.id,
      lesson_id: lesson.id,
      present: !isPresent,
      role: 'CHILD', // TODO: back-end should be able to get the role based on the user_id.
    }];

    postAttendanceStart();

    userAdministrationApi.postAttendance(body)
      .then(postAttendanceSuccess)
      .catch(postAttendanceError);
  }

  redirectToOverview() {
    const { history } = this.props;
    history.push('/teacherprofile/overview');
  }

  render() {
    const { error, course, lessons, children } = this.props;
    if (error) {
      return <ErrorMessage message="Fout bij inladen van de lesdata" />;
    }

    if (this.state.loading) {
      return <Loader active={this.state.loading} />;
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

export default AttendanceContainer;
