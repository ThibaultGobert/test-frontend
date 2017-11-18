import { connect } from 'react-redux';
import mapActionCreatorsToProps from '../../../functions/mapActionCreatorsToProps';
import ClassListContainer from './ClassListContainer';

const mapStateToProps = (state, ownProps) => {
  const courseId = ownProps.params.id; // from path /course/:id
  let classList = state.courses.data[courseId]
  && state.courses.data[courseId].classList ? state.courses.data[courseId].classList : undefined;
  if (!classList) {
    classList = [];
  }

  return {
    courseId,
    course: state.courses.data[courseId],
    classList: classList,
    loading: state.users.loading,
    hasError: state.users.hasError,
    error: state.users.error,
    users: state.users.data,
  };
};


export default connect(mapStateToProps)(ClassListContainer);
