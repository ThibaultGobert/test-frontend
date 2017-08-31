import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import LessonList from './LessonList';
import {bindActionCreators} from 'redux';
import * as lessonActions from '../../actions/lessons';
import * as slideshowTypes from '../../constants/slideshowTypes';

class ClanPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    this.props.actions.loadLessons(slideshowTypes.CLASS);
  }

  render() {
    return(
      <div>
        <h1>Jouw clan</h1>
        <LessonList lessons={this.props.lessons}/>
      </div>
    );
  }
}

ClanPage.propTypes = {};

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

export default connect(mapStateToProps, mapDispatchToProps)(ClanPage);
