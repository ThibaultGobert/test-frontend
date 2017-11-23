import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import _ from 'lodash';
import { fetchLessonsStart, fetchLessonsSuccess, fetchLessonsError } from '../../../actions/lessons';
import mapActionCreatorsToProps from '../../../functions/mapActionCreatorsToProps';
import ClassContainer from './ClassContainer';

const mapStateToProps = (state, { match }) => {
  return {
    lessons: _.values(state.lessons.data),
    loading: state.users.loading,
    error: state.users.error,
    users: state.users.data,
  };
};

const actionCreators = mapActionCreatorsToProps({
  fetchLessonsStart,
  fetchLessonsSuccess,
  fetchLessonsError,
});

export default withRouter(connect(mapStateToProps, actionCreators)(ClassContainer));
