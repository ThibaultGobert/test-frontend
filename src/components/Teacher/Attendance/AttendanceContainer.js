import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Attendance from './Attendance';
import Loader from '../../shared/Loader';
import ErrorMessage from '../../shared/ErrorMessage';
import courseApi from '../../../api/courses';

import {normalize} from 'normalizr';
import * as schema from '../../../api/mappers/schema';

class AttendanceContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
    this.redirectToOverview = this.redirectToOverview.bind(this);
  }

  componentDidMount() {
    const courseId = this.props.course.id;
    const { fetchChildrenStart, fetchChildrenSuccess, fetchChildrenError, fetchAttendancesSuccess } = this.props.actions;

    fetchChildrenStart();

    courseApi
      .getChildrenForCourse(courseId)
      .then(data => fetchChildrenSuccess(data, courseId))
      .catch(fetchChildrenError);

    courseApi
      .getAttendanceForCourse(courseId)
      .then((attendancesPerLesson) => {
        attendancesPerLesson.forEach((data) => {
          console.log('original', data);
          console.log('formatted', normalize(data.attendanceList, schema.lists));
         // fetchAttendancesSuccess(attendances, lessonId);
        });
      });
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
    const { error, course, lessons, children } = this.props;

    if (error) {
      return (<ErrorMessage message="Fout bij inladen van de lesdata" />);
    }

    return (
      <div className="AttendanceContainer">
        <Attendance
          submit={this.submit}
          onChange={this.onChange}
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
