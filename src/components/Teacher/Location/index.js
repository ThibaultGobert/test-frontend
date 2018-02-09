import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapActionCreatorsToProps from '../../../functions/mapActionCreatorsToProps';

import {
  fetchLocationStart,
  fetchLocationSuccess,
  fetchLocationError,
} from '../../../actions/locations';

import LocationContainer from './LocationContainer';

const mapStateToProps = (state, { match }) => {
  const locationId = match.params.id;
  const { locations } = state;
  const location = locations.data[locationId];

  return {
    locationId,
    loading: locations.loading,
    location,
    teachers: state.teachers.data,
  };
};

const actionCreators = mapActionCreatorsToProps({
  fetchLocationStart,
  fetchLocationSuccess,
  fetchLocationError,
});

export default withRouter(connect(mapStateToProps, actionCreators)(LocationContainer));
