import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import LessonList from './LessonList';
import {bindActionCreators} from 'redux';
import * as lessonActions from '../../actions/lessons';
import Loader from '../shared/Loader';
import ErrorMessage from "../shared/ErrorMessage";
import * as slideTypes from '../../constants/slideTypes';
import Reloader from "../shared/Reloader";
import _ from 'lodash';

class ClanPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    if(_.isEmpty(this.props.lessons) && this.props.error == null) {
      this.props.actions.loadLessons();
    }
  }

  componentDidUpdate() {
    if(!this.props.loading && _.isEmpty(this.props.lessons) && !this.props.hasError) {
      this.props.actions.loadLessons();
    }
  }

  render() {
    return(
      <div>
        <h1>Klaslessen</h1>
        <Reloader action={this.props.actions.loadLessons}/>
        <Loader active={this.props.loading}/>
        <LessonList lessons={this.props.lessons} slideType={slideTypes.CLASS}/>
        { this.props.hasError && <ErrorMessage header="Fout bij inladen" message={this.props.error.message} />}
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
