import React from 'react';
import locationApi from '../../../api/mocks/mockLocations';
import Location from './Location';
import Loader from '../../shared/Loader';

class LocationsContainer extends React.Component {
  componentDidMount() {
    const { fetchLocationStart, fetchLocationSuccess, fetchLocationError } = this.props.actions;
    const { locationId } = this.props;

    fetchLocationStart();
    locationApi
      .getLocation(locationId)
      .then(fetchLocationSuccess)
      .catch(fetchLocationError);
  }

  render() {
    const { location, loading } = this.props;
    if (loading) {
      return <Loader active />;
    }
    return <Location location={location} {...this.props} />;
  }
}

export default LocationsContainer;
