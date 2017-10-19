import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import LessonList from '../shared/LessonList';
import {bindActionCreators} from 'redux';
import * as lessonActions from '../../actions/lessons';
import Loader from '../shared/Loader';
import * as slideTypes from '../../constants/slideTypes';
import Reloader from "../shared/Reloader";
import _ from 'lodash';

class ClanPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    if( this.props.error == null) {
      this.props.actions.loadLessons("CLASS");
    }
  }

  componentDidUpdate() {
    if (_.isEmpty(this.props.lessons)) {
      if (!this.props.loading && !this.props.hasError) {
        this.props.actions.loadLessons("CLASS");
      }
    }
  }

  render() {
    return(
      <div>
        <h1>Klaslessen</h1>
        <Reloader action={this.props.actions.loadLessons} />
        <Loader active={this.props.loading}/>
        <LessonList lessons={this.props.lessons} slideType={slideTypes.CLASS} showLockedLessons={true}/>
      </div>
    );
  }
}

ClanPage.propTypes = {
  actions: PropTypes.object.isRequired,
  lessons: PropTypes.arrayOf(PropTypes.object)
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
