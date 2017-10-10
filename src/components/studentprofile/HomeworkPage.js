import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as lessonActions from '../../actions/lessons';
import * as slideTypes from '../../constants/slideTypes';
import Loader from '../shared/Loader';
import Reloader from "../shared/Reloader";
import LessonList from "./LessonList";
import _ from 'lodash';

class HomeworkPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    if(this.props.error == null) {
      this.props.actions.loadLessons(slideTypes.HOME);
    }
  }

  componentDidUpdate() {
    if (_.isEmpty(this.props.lessons)) {
      if (!this.props.loading && !this.props.hasError) {
        this.props.actions.loadLessons(slideTypes.HOME);
      }
    }
  }

  render() {
    return(
      <div>
        <h1>De thuisversies</h1>
        <Reloader action={this.props.actions.loadLessons}/>
        <Loader active={this.props.loading}/>
        <LessonList lessons={this.props.lessons} slideType={slideTypes.HOME}/>
      </div>
    );
  }
}

HomeworkPage.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeworkPage);
