import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import values from 'lodash/values';
import { fetchCoursesStart, fetchCoursesSuccess, fetchCoursesError } from '../../../actions/courses';
import mapActionCreatorsToProps from '../../../functions/mapActionCreatorsToProps';
import CalendarContainer from './CalendarContainer';

const mapStateToProps = (state) => {
  return {
    loading: state.lessons.loading,
    error: state.lessons.error,
    lessons: values(state.lessons.data),
  };
};

const actionCreators = mapActionCreatorsToProps({
  fetchCoursesStart,
  fetchCoursesSuccess,
  fetchCoursesError,
});

export default withRouter(connect(mapStateToProps, actionCreators)(CalendarContainer));
