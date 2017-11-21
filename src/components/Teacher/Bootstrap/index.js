import { connect } from 'react-redux';

import Bootstrap from './Bootstrap';

import { fetchCoursesSuccess } from '../../../actions/courses';
import { finishBootstrap } from '../../../actions/application';

import mapActionCreatorsToProps from '../../../functions/mapActionCreatorsToProps';

const actionCreators = mapActionCreatorsToProps({
  fetchCoursesSuccess,
  finishBootstrap
});

export default connect(null, actionCreators)(Bootstrap);
