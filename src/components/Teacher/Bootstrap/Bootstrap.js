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
    Promise.all([
      courseApi.getCourses(false),
      courseApi.getCourses(true),
      locationApi.getLocations(),
    ])
      .then(results => {
        fetchCoursesSuccess(results[0]);
        fetchCoursesSuccess(results[1]);
        fetchLocationsSuccess(results[2]);
      })
      .then(this.props.actions.finishBootstrap);
  }

  render() {
    return <Loader active />;
  }
}

export default Bootstrap;
