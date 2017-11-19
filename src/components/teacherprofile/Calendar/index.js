import { connect } from 'react-redux';
import { fetchCoursesStart, fetchCoursesSuccess, fetchCoursesError } from '../../../actions/courses';
import mapActionCreatorsToProps from '../../../functions/mapActionCreatorsToProps';
import CalendarContainer from './CalendarContainer';

const mapStateToProps = (state, ownProps) => {
  return {
      loading: state.courses.loading,
      error: state.courses.error,
      courses: state.courses.data
  };
};

const actionCreators = mapActionCreatorsToProps({
  fetchCoursesStart,
  fetchCoursesSuccess,
  fetchCoursesError
});

export default connect(mapStateToProps, actionCreators)(CalendarContainer);
