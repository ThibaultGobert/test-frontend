import { connect } from 'react-redux';
import { fetchCoursesStart, fetchCoursesSuccess, fetchCoursesError } from '../../../actions/courses';
import mapActionCreatorsToProps from '../../../functions/mapActionCreatorsToProps';
import CalendarContainer from './CalendarContainer';
import _ from 'lodash';

const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.lessons.loading,
    error: state.lessons.error,
    lessons: _.values(state.lessons.data),
  };
};

const actionCreators = mapActionCreatorsToProps({
  fetchCoursesStart,
  fetchCoursesSuccess,
  fetchCoursesError,
});

export default connect(mapStateToProps, actionCreators)(CalendarContainer);
