import { connect } from 'react-redux';
import mapActionCreatorsToProps from '../../../functions/mapActionCreatorsToProps';
import {loadChildrenIfNeeded, loadCoursesIfNeeded} from "../../../actions/courses";
import ClassListContainer from './ClassListContainer';

const mapStateToProps = (state, ownProps) => {
  const courseId = ownProps.params.id; // from path /course/:id
  let classList = state.classlists.data[courseId];
  if (!classList) {
    classList = [];
  }

  return {
    courseId,
    course: state.courses.data[courseId],
    classList: classList,
    loading: state.classlists.loading,
    hasError: state.classlists.hasError,
    error: state.classlists.error
  };
};

const actionCreators = mapActionCreatorsToProps({
  loadChildrenIfNeeded,
  loadCoursesIfNeeded
});

export default connect(mapStateToProps, actionCreators)(ClassListContainer);
