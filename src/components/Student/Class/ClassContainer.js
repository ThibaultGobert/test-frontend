import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from '../../shared/Loader';
import * as lessonTypes from '../../../constants/lessonTypes';
import * as slideTypes from '../../../constants/slideTypes';
import lessonApi from '../../../api/lessons';
import Class from './Class';

class ClassContainer extends Component {
  constructor(...props) {
    super(...props);
  }

  componentDidMount() {
    this.fetchLessons();
  }

  fetchLessons() {
    const {fetchLessonsStart, fetchLessonsSuccess, fetchLessonsError} = this.props.actions;

    fetchLessonsStart();
    lessonApi.getLessonsForStudent(lessonTypes.CLASSHOME, slideTypes.CLASS).then((lessons) => {
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
      <div className="ClassContainer">
        <Class lessons={lessons}/>
      </div>
    );
  }
}

ClassContainer.propTypes = {
  loading: PropTypes.bool,
  lessons: PropTypes.arrayOf(PropTypes.object),
  error: PropTypes.object,
};

export default ClassContainer;
