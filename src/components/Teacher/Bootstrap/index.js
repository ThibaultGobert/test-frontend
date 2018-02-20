import { connect } from 'react-redux';

import Bootstrap from './Bootstrap';

import { fetchCoursesStart, fetchCoursesSuccess } from '../../../actions/courses';
import { fetchLocationsStart, fetchLocationsSuccess } from '../../../actions/locations';
import { finishBootstrap } from '../../../actions/application';

import mapActionCreatorsToProps from '../../../functions/mapActionCreatorsToProps';

const actionCreators = mapActionCreatorsToProps({
  fetchLocationsStart,
  fetchLocationsSuccess,
  fetchCoursesStart,
  fetchCoursesSuccess,
  finishBootstrap,
});

export default connect(null, actionCreators)(Bootstrap);
