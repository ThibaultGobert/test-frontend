import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Loader from '../shared/Loader';
import Reloader from "../shared/Reloader";
import LessonList from "../shared/LessonList";
import * as lessonActions from '../../actions/lessons';
import * as lessonTypes from '../../constants/lessonTypes';
import * as slideTypes from '../../constants/slideTypes';

class HomeworkPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.fetchLessons();
  }

  fetchLessons() {
    this.props.actions.loadLessons(lessonTypes.CLASSHOME, slideTypes.HOME);
  }

  render() {
    const {
      loading,
      lessons
    } = this.props;

    return(
      <div className="homework-page">
        <h1>De thuisversies</h1>
        <Reloader action={this.fetchLessons}/>
        <Loader active={loading}/>
        <LessonList lessons={lessons} slideType={slideTypes.HOME} showLockedLessons />
      </div>
    );
  }
}

HomeworkPage.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeworkPage);
