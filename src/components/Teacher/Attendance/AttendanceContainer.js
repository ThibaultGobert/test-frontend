import React, { Component } from 'react';

import Attendance from './Attendance';
import ErrorMessage from '../../shared/ErrorMessage';
import userAdministrationApi from '../../../api/userAdministration';
import courseApi from '../../../api/courses';

import Loader from '../../shared/Loader';
import _ from 'lodash';
import FeedbackModal from './Feedback/FeedbackModal';

class AttendanceContainer extends Component {
  constructor(...props) {
    super(...props);

    this.state = {
      loading: true,
      user: null,
      isOpen: false,
    };

    this.submit = this.submit.bind(this);
    this.redirectToOverview = this.redirectToOverview.bind(this);
    this.showModal = this.showModal.bind(this);
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

  onChange({ target }) {
    // change state on form change
    this.setState(prevState => ({}));
  }

  submit(event, attendance, lesson, role) {
    event.preventDefault();

    const { postAttendanceStart, postAttendanceSuccess, postAttendanceError } = this.props.actions;

    const body = [
      {
        user_id: attendance.userId,
        lesson_id: lesson.id,
        present: !attendance.isPresent,
        role,
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

  showModal(studentId) {
    this.setState({ isOpen: true, studentId });
  }

  render() {
    const { error, course, lessons, students, teachers } = this.props;
    const { studentId, isOpen, loading } = this.state;

    if (error) {
      return <ErrorMessage message="Fout bij inladen van de lesdata" />;
    }

    if (loading) {
      return <Loader active />;
    }

    const user = _.find(students, { id: studentId });

    return (
      <div className="AttendanceContainer">
        {isOpen && (
          <FeedbackModal
            isOpen={isOpen}
            course={course}
            user={user}
            onClose={() => {
              this.setState({ isOpen: false });
            }}
          />
        )}
        <Attendance
          submit={this.submit}
          course={course}
          lessons={lessons}
          students={students}
          teachers={teachers}
          redirectToOverview={this.redirectToOverview}
          showModal={this.showModal}
          {...this.state}
        />
      </div>
    );
  }
}

export default AttendanceContainer;
