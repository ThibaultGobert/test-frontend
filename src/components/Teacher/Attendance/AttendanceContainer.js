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
      loading: true,
    };

    this.submit = this.submit.bind(this);
    this.redirectToOverview = this.redirectToOverview.bind(this);
  }

  componentDidMount() {
    const courseId = this.props.course.id;
    const {
      fetchStudentsStart,
      fetchStudentsSuccess,
      fetchStudentsError,
      fetchAttendancesStart,
      fetchAttendancesSuccess,
      fetchAttendancesError,
    } = this.props.actions;

    fetchStudentsStart();

    courseApi
      .getStudentsForCourse(courseId)
      .then(data => fetchStudentsSuccess(data, courseId))
      .catch(fetchStudentsError);

    fetchAttendancesStart();
    userAdministrationApi
      .getAttendanceForCourse(courseId)
      .then(data => {
        fetchAttendancesSuccess(data);
        this.setState({ loading: false });
      })
      .catch(fetchAttendancesError);
  }

  submit(event, attendance, lesson) {
    event.preventDefault();

    const { postAttendanceStart, postAttendanceSuccess, postAttendanceError } = this.props.actions;

    const body = [
      {
        user_id: attendance.userId,
        lesson_id: lesson.id,
        present: !attendance.isPresent,
        role: 'CHILD', // TODO: back-end should be able to get the role based on the user_id.
      },
    ];

    postAttendanceStart();

    userAdministrationApi
      .postAttendance(body)
      .then(() => {
        postAttendanceSuccess({
          ...attendance,
          isPresent: !attendance.isPresent,
        });
      })
      .catch(postAttendanceError);
  }

  redirectToOverview() {
    const { history } = this.props;
    history.push('/teacherprofile/overview');
  }

  render() {
    const { error, course, lessons, students, teachers } = this.props;
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
          students={students}
          teachers={teachers}
          redirectToOverview={this.redirectToOverview}
          {...this.state}
        />
      </div>
    );
  }
}

export default AttendanceContainer;
