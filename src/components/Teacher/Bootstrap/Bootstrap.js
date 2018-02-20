import React, { Component } from 'react';

import courseApi from '../../../api/courses';
import Loader from '../../shared/FullScreenLoader';
import locationApi from '../../../api/locations';

class Bootstrap extends Component {
  componentDidMount() {
    const {
      fetchLocationsStart,
      fetchLocationsSuccess,
      fetchCoursesStart,
      fetchCoursesSuccess,
    } = this.props.actions;

    fetchLocationsStart();
    fetchCoursesStart();
    Promise.all([courseApi.getCourses(false), locationApi.getLocations()])
      .then(results => {
        fetchCoursesSuccess(results[0]);
        fetchLocationsSuccess(results[1]);
      })
      .then(this.props.actions.finishBootstrap);
  }

  render() {
    return <Loader active />;
  }
}

export default Bootstrap;
