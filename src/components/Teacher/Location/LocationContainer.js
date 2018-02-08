import React from 'react';
import locationApi from '../../../api/locations';
import Location from './Location';

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
    return <Location {...this.props} />;
  }
}

export default LocationsContainer;
