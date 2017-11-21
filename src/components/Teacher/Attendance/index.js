import { connect } from 'react-redux';
import mapActionCreatorsToProps from '../../../functions/mapActionCreatorsToProps';
import {
  postAttendanceStart,
  postAttendanceSuccess,
  postAttendanceError,
} from '../../../actions/userAdministration';
import AttendanceContainer from './AttendanceContainer';

const mapStateToProps = (state, { params }) => {
  const courseId = params.id;

  return {
    courseId,
    // course: state.courses.data[courseId],
    // classList: state.classlists.data[courseId],
    // loading: state.classlists.loading || state.courses.loading
  };
};

const actionCreators = mapActionCreatorsToProps({
  postAttendanceStart,
  postAttendanceSuccess,
  postAttendanceError,
});

export default connect(mapStateToProps, actionCreators)(AttendanceContainer);
