import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapActionCreatorsToProps from '../../../functions/mapActionCreatorsToProps';

import {
  postAttendanceStart,
  postAttendanceSuccess,
  postAttendanceError,
  fetchAttendancesStart,
  fetchAttendancesSuccess,
  fetchAttendancesError,
} from '../../../actions/userAdministration';

import {
  fetchStudentsStart,
  fetchStudentsSuccess,
  fetchStudentsError,
} from '../../../actions/courses';

import AttendanceContainer from './AttendanceContainer';
import {
  getCourseById,
  getLessonById,
  getChildById,
  getAttendancesByLessonId,
  getTeachersByCourseId,
  isAssistentOnCourse,
} from '../../../selectors';

const mapStateToProps = (state, { match }) => {
  const course = getCourseById(state, match.params.id);
  const teachers = getTeachersByCourseId(state, course.id);
  const { loggedIn } = state;
  const lessons = course.lessons.map(lessonId => {
    const lesson = getLessonById(state, lessonId);
    const attendances = getAttendancesByLessonId(state, lessonId);

    return {
      ...lesson,
      attendances,
    };
  });

  const students = course.students
    ? course.students.map(childId => {
      return getChildById(state, childId);
    })
    : [];

  const isAssitent = isAssistentOnCourse(state, course);

  return {
    course,
    lessons,
    students,
    teachers,
    isAssitent,
    loggedInUser: loggedIn.data,
    loading: state.attendances.loading,
  };
};

const actionCreators = mapActionCreatorsToProps({
  postAttendanceStart,
  postAttendanceSuccess,
  postAttendanceError,
  fetchStudentsStart,
  fetchStudentsSuccess,
  fetchStudentsError,
  fetchAttendancesStart,
  fetchAttendancesSuccess,
  fetchAttendancesError,
});

export default withRouter(connect(mapStateToProps, actionCreators)(AttendanceContainer));
