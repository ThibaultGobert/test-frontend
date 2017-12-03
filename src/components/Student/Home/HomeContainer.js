import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from '../../shared/Loader';
import * as lessonTypes from '../../../constants/lessonTypes';
import * as slideTypes from '../../../constants/slideTypes';
import lessonApi from '../../../api/lessons';
import Home from './Home';

class HomeContainer extends Component {
  componentDidMount() {
    this.fetchLessons();
  }

  fetchLessons() {
    const {fetchLessonsStart, fetchLessonsSuccess, fetchLessonsError} = this.props.actions;

    fetchLessonsStart();
    lessonApi.getLessonsForStudent(lessonTypes.CLASSHOME, slideTypes.HOME).then((lessons) => {
      fetchLessonsSuccess(lessons);
    }).catch(error => {
      fetchLessonsError(error);
    });
  }

  render() {
    const { loading, lessons } = this.props;

    if (loading) {
      return <Loader active />;
    }

    return (
      <div className="HomeContainer">
        <Home lessons={lessons}/>
      </div>
    );
  }
}

HomeContainer.propTypes = {
  loading: PropTypes.bool,
  lessons: PropTypes.object,
  error: PropTypes.object,
};

export default HomeContainer;
