import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ClassListContainer from './ClassListContainer';

import { fetchChildrenStart, fetchChildrenSuccess, fetchChildrenError } from '../../../actions/courses';
import { getCourseById, getChildrenByCourseId } from '../../../selectors';
import mapActionCreatorsToProps from '../../../functions/mapActionCreatorsToProps';

const mapStateToProps = (state, { match }) => {
  const courseId = match.params.id; // from path /course/:id

  return {
    courseId,
    course: getCourseById(state, courseId),
    classlist: getChildrenByCourseId(state, courseId),
    loading: state.users.loading,
    error: state.users.error,
    users: state.users.data,
  };
};

const actionCreators = mapActionCreatorsToProps({
  fetchChildrenStart,
  fetchChildrenSuccess,
  fetchChildrenError,
});

export default withRouter(connect(mapStateToProps, actionCreators)(ClassListContainer));
