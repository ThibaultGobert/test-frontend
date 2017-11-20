import { connect } from 'react-redux';
import ClassListContainer from './ClassListContainer';

import { fetchChildrenStart, fetchChildrenSuccess, fetchChildrenError } from '../../../actions/courses';
import { getCourseById, getChildrenByCourseId } from '../../../selectors';
import mapActionCreatorsToProps from '../../../functions/mapActionCreatorsToProps';

const mapStateToProps = (state, { params }) => {
  const courseId = params.id; // from path /course/:id

  return {
    courseId,
    course: getCourseById(state, courseId),
    classlist: getChildrenByCourseId(state, courseId),
    loading: state.users.loading,
    error: state.users.error,
    users: state.users.data
  };
};

const actionCreators = mapActionCreatorsToProps({
  fetchChildrenStart,
  fetchChildrenSuccess,
  fetchChildrenError
});

export default connect(mapStateToProps, actionCreators)(ClassListContainer);
