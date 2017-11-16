import { connect } from 'react-redux';
import mapActionCreatorsToProps from '../../../functions/mapActionCreatorsToProps';
import {loadCoursesIfNeeded} from '../../../actions/courses';
import CalendarContainer from './CalendarContainer';

const mapStateToProps = (state, ownProps) => {
  let courses = state.lessons;

  return {
      loading: state.courses.loading,
      error: state.courses.error,
      hasError: state.calendar.hasError
  };
};

const actionCreators = mapActionCreatorsToProps({
  loadCoursesIfNeeded
});

export default connect(mapStateToProps, actionCreators)(CalendarContainer);
