import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapActionCreatorsToProps from '../../../functions/mapActionCreatorsToProps';

import {
  fetchLocationStart,
  fetchLocationSuccess,
  fetchLocationError,
} from '../../../actions/locations';

import LocationContainer from './LocationContainer';

const mapStateToProps = (state, ownProps) => {
  const locationId = ownProps.user.id;

  return {
    locationId,
  };
};

const actionCreators = mapActionCreatorsToProps({
  fetchLocationStart,
  fetchLocationSuccess,
  fetchLocationError,
});

export default withRouter(connect(mapStateToProps, actionCreators)(LocationContainer));
