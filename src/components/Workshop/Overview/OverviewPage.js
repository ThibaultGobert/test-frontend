import React from 'react';
import LessonList from '../../shared/LessonList';
import Loader from '../../shared/Loader';
import * as slideTypes from '../../../constants/slideTypes';
import lessonApi from '../../../api/lessons';
import * as lessonTypes from '../../../constants/lessonTypes';

class OverviewPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.fetchLessons = this.fetchLessons.bind(this);
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
    const {
      loading,
      lessons
    } = this.props;

    return(
      <div>
        <h1>Workshops</h1>
        <Loader active={loading}/>
        <LessonList lessons={lessons} slideType={slideTypes.CLASS} showLockedLessons={false} />
      </div>
    );
  }
}

export default OverviewPage;
