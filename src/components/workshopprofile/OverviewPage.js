import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import LessonList from '../shared/LessonList';
import * as lessonActions from '../../actions/lessons';
import Loader from '../shared/Loader';
import * as slideTypes from '../../constants/slideTypes';
import * as lessonTypes from '../../constants/lessonTypes';
import Reloader from "../shared/Reloader";
import _ from 'lodash';

class ClanPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.fetchLessons = this.fetchLessons.bind(this);
  }

  componentDidMount() {
    if( this.props.error === null) {
      this.fetchLessons();
    }
  }

  fetchLessons() {
    this.props.actions.loadLessons(lessonTypes.CLASSHOME, slideTypes.CLASS);
  }

  componentDidUpdate() {
    if (_.isEmpty(this.props.lessons)) {
      if (!this.props.loading && !this.props.hasError) {
        this.fetchLessons();
      }
    }
  }

  render() {
    const {
      loading,
      lessons
    } = this.props;

    return(
      <div>
        <h1>Workshops</h1>
        <Reloader action={this.fetchLessons} />
        <Loader active={loading}/>
        <LessonList lessons={lessons} slideType={slideTypes.CLASS} showLockedLessons={false} />
      </div>
    );
  }
}

ClanPage.propTypes = {
  actions: PropTypes.object.isRequired,
  lessons: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(ClanPage);
