import React, { Component } from 'react';

import lessonApi from '../../../api/lessons';
import Loader from '../../shared/FullScreenLoader';
import * as lessonTypes from '../../../constants/lessonTypes';
import * as slideTypes from '../../../constants/slideTypes';

class Bootstrap extends Component {
  componentDidMount() {
    lessonApi.getLessonsForStudent(lessonTypes.CLASSHOME, slideTypes.CLASS)
      .then(this.props.actions.fetchLessonsSuccess)
      .then(this.props.actions.finishBootstrap);
  }

  render() {
    return <Loader active/>;
  }
}

export default Bootstrap;
