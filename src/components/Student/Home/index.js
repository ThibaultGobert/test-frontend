import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import _ from 'lodash';
import { fetchLessonsStart, fetchLessonsSuccess, fetchLessonsError } from '../../../actions/lessons';
import mapActionCreatorsToProps from '../../../functions/mapActionCreatorsToProps';
import HomeContainer from './HomeContainer';

const mapStateToProps = (state, { match }) => {
  return {
    lessons: _.values(state.lessons.data),
    loading: state.lessons.loading,
    error: state.lessons.error,
  };
};

const actionCreators = mapActionCreatorsToProps({
  fetchLessonsStart,
  fetchLessonsSuccess,
  fetchLessonsError,
});

export default withRouter(connect(mapStateToProps, actionCreators)(HomeContainer));
