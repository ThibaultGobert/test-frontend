import { connect } from 'react-redux';

import Bootstrap from './Bootstrap';

import { fetchLessonsSuccess } from '../../../actions/lessons';
import { finishBootstrap } from '../../../actions/application';

import mapActionCreatorsToProps from '../../../functions/mapActionCreatorsToProps';

const actionCreators = mapActionCreatorsToProps({
  fetchLessonsSuccess,
  finishBootstrap,
});

export default connect(null, actionCreators)(Bootstrap);
