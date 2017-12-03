import React, { Component } from 'react';

import courseApi from '../../../api/courses';
import Loader from "../../shared/Loader";

class Bootstrap extends Component {
  componentDidMount() {
    courseApi
      .getCourses(false)
      .then(this.props.actions.fetchCoursesSuccess)
      .then(this.props.actions.finishBootstrap);
  }

  render() {
    return <Loader active/>;
  }
}

export default Bootstrap;
