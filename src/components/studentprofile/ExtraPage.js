import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import LessonList from '../shared/LessonList';
import Loader from '../shared/Loader';
import Reloader from "../shared/Reloader";
import * as lessonActions from '../../actions/lessons';
import * as lessonTypes from '../../constants/lessonTypes';

class ExtraPage extends React.Component {
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
    this.props.actions.lessonApi.getLessonsForStudent(lessonTypes.EXTRA).then((lessons) => {
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
      <div className="extra-page">
        <h1>Extra lessen</h1>
        <Reloader action={this.fetchLessons} />
        <Loader active={loading}/>
        <LessonList lessons={lessons} showLockedLessons/>
      </div>
    );
  }
}

ExtraPage.propTypes = {
  actions: PropTypes.object.isRequired,
  lessons: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object,
  hasError: PropTypes.bool.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    lessons: state.lessons.data,
    loading: state.lessons.loading,
    error: state.lessons.error,
    hasError: state.lessons.hasError
  };
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(lessonActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ExtraPage);
