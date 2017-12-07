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
    loading: state.children.loading,
    error: state.children.error,
    children: state.children.data,
  };
};

const actionCreators = mapActionCreatorsToProps({
  fetchChildrenStart,
  fetchChildrenSuccess,
  fetchChildrenError,
});

export default withRouter(connect(mapStateToProps, actionCreators)(ClassListContainer));
