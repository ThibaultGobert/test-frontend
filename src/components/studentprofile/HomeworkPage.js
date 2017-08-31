import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as lessonActions from '../../actions/lessons';
import * as slideshowTypes from '../../constants/slideshowTypes';
import LessonList from "./LessonList";

class HomeworkPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    this.props.actions.loadLessons(slideshowTypes.HOME);
  }

  render() {
    return (
      <div>
        <h1>De thuisversies</h1>
        <LessonList lessons={this.props.lessons}/>
      </div>
    );
  }
}

HomeworkPage.propTypes = {};

function mapStateToProps(state, ownProps) {
  return {
    lessons: state.lessons
  };
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(lessonActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeworkPage);
