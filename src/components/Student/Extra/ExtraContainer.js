import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from '../../shared/Loader';
import * as lessonTypes from '../../../constants/lessonTypes';
import lessonApi from '../../../api/lessons';
import Extra from './Extra';

class ExtraContainer extends Component {
  constructor(...props) {
    super(...props);
  }

  componentDidMount() {
    this.fetchLessons();
  }

  fetchLessons() {
    const {fetchLessonsStart, fetchLessonsSuccess, fetchLessonsError} = this.props.actions;

    fetchLessonsStart();
    lessonApi.getLessonsForStudent(lessonTypes.EXTRA).then((lessons) => {
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
      <div className="ExtraContainer">
        <Extra lessons={lessons}/>
      </div>
    );
  }
}

ExtraContainer.propTypes = {
  loading: PropTypes.bool,
  lessons: PropTypes.object,
  error: PropTypes.object,
};

export default ExtraContainer;
