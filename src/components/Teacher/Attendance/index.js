import { connect } from 'react-redux';
import mapActionCreatorsToProps from '../../../functions/mapActionCreatorsToProps';
import { withRouter } from 'react-router-dom';

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
} from '../../../actions/userAdministration';

import AttendanceContainer from './AttendanceContainer';
import { getCourseById, getLessonById, getChildById, getAttendanceById } from '../../../selectors';
import _ from 'lodash';

const mapStateToProps = (state, { match }) => {
  const course = getCourseById(state, match.params.id);

  const lessons = course.lessons.map(lessonId => {
    const lesson = getLessonById(state, lessonId);
    return {
      ...lesson,
      attendances: lesson.attendances ? lesson.attendances.map(attendanceId => {
        return getAttendanceById(state, attendanceId);
      }): undefined,
    };
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
    loading: state.attendances.loading,
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

export default withRouter(connect(mapStateToProps, actionCreators)(AttendanceContainer));
