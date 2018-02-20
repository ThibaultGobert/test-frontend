import React from 'react';
import Location from './Location';
import Loader from '../../shared/Loader';

class LocationsContainer extends React.Component {
  render() {
    const { location, loading } = this.props;
    if (loading) {
      return <Loader active />;
    }
    return <Location location={location} {...this.props} />;
  }
}

export default LocationsContainer;
