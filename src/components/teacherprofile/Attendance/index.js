import { connect } from 'react-redux';
import mapActionCreatorsToProps from '../../../functions/mapActionCreatorsToProps';
import { markPresence } from '../../../actions/userAdministration';
import {loadCoursesIfNeeded, loadChildrenIfNeeded} from "../../../actions/courses";
import AttendanceContainer from './AttendanceContainer';

const mapStateToProps = (state, ownProps) => {
  const courseId = ownProps.params.id;
  const course = state.courses.data[courseId];
  const classList = state.classlists.data[courseId];
  const loading = state.classlists.loading || state.courses.loading;
  const hasError = state.classlists.hasError || state.courses.hasError;

  return {
    courseId,
    course,
    classList,
    loading,
    hasError
  }
};

const actionCreators = mapActionCreatorsToProps({
  markPresence,
  loadCoursesIfNeeded,
  loadChildrenIfNeeded
});

export default connect(mapStateToProps, actionCreators)(AttendanceContainer);
