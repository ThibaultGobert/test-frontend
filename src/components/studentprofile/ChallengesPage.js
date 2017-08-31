import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import LessonList from "./LessonList";
import * as lessonActions from '../../actions/lessons';
import * as slideshowTypes from '../../constants/slideshowTypes';

class ChallengesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    this.props.actions.loadLessons(slideshowTypes.CHALLENGES);
  }

  render() {
    return (
      <div>
        <h1>Jouw challenges</h1>
        <LessonList lessons={this.props.lessons}/>
      </div>
    );
  }
}

ChallengesPage.propTypes = {};

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

export default connect(mapStateToProps, mapDispatchToProps)(ChallengesPage);
