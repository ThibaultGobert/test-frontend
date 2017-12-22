import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ClassListContainer from './ClassListContainer';

import { fetchStudentsStart, fetchStudentsSuccess, fetchStudentsError } from '../../../actions/courses';
import { getCourseById, getStudentsByCourseId } from '../../../selectors';
import mapActionCreatorsToProps from '../../../functions/mapActionCreatorsToProps';

const mapStateToProps = (state, { match }) => {
  const courseId = match.params.id; // from path /course/:id

  return {
    courseId,
    course: getCourseById(state, courseId),
    classlist: getStudentsByCourseId(state, courseId),
    loading: state.students.loading,
    error: state.students.error,
    students: state.students.data,
  };
};

const actionCreators = mapActionCreatorsToProps({
  fetchStudentsStart,
  fetchStudentsSuccess,
  fetchStudentsError,
});

export default withRouter(connect(mapStateToProps, actionCreators)(ClassListContainer));
