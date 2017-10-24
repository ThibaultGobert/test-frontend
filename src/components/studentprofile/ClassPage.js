import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import LessonList from '../shared/LessonList';
import Loader from '../shared/Loader';
import Reloader from "../shared/Reloader";
import * as lessonActions from '../../actions/lessons';
import * as slideTypes from '../../constants/slideTypes';
import * as lessonTypes from '../../constants/lessonTypes';

class ClassPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.fetchLessons();
  }

  fetchLessons() {
    this.props.actions.loadLessons(lessonTypes.CLASSHOME, slideTypes.CLASS);
  }

  render() {
    const {
      loading,
      lessons
    } = this.props;
    return(
      <div>
        <h1>Klaslessen</h1>
        <Reloader action={this.fetchLessons} />
        <Loader active={loading}/>
        <LessonList lessons={lessons} slideType={slideTypes.CLASS} showLockedLessons/>
      </div>
    );
  }
}

ClassPage.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(ClassPage);
