import { connect } from 'react-redux';
import mapActionCreatorsToProps from '../../../functions/mapActionCreatorsToProps';
import {
  postAttendanceStart,
  postAttendanceSuccess,
  postAttendanceError,
} from '../../../actions/userAdministration';

import {
  fetchChildrenStart,
  fetchChildrenSuccess,
  fetchChildrenError,
} from '../../../actions/courses';

import {
  fetchAttendancesStart,
  fetchAttendancesSuccess,
  fetchAttendancesError,
} from '../../../actions/lessons';

import AttendanceContainer from './AttendanceContainer';
import { getCourseById, getLessonById, getChildById, getAttendanceById } from '../../../selectors';

const mapStateToProps = (state, { match }) => {
  const course = getCourseById(state, match.params.id);

  const lessons = course.lessons.map(lessonId => {
    const lesson = getLessonById(state, lessonId);

    return {
      ...lesson,
      attendances: lesson.attendances.map((attendanceId) => {
        return getAttendanceById(state, attendanceId);
      }),
    }

  });

  const children = course.children
    ? course.children.map(childId => {
      return getChildById(state, childId);
    })
    : [];

  return {
    course,
    lessons,
    children,
  };
};

const actionCreators = mapActionCreatorsToProps({
  postAttendanceStart,
  postAttendanceSuccess,
  postAttendanceError,
  fetchChildrenStart,
  fetchChildrenSuccess,
  fetchChildrenError,
  fetchAttendancesStart,
  fetchAttendancesSuccess,
  fetchAttendancesError,
});

export default connect(mapStateToProps, actionCreators)(AttendanceContainer);
