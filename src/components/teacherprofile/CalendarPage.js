import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {Loader, Dimmer} from 'semantic-ui-react';
import * as courseActions from '../../actions/courses';

class LessonDatePage extends React.Component {
  // init state + bind functions
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.props.actions.loadLessons();
  }

  render() {
    if (this.props.isLoading) {
      <Dimmer active>
        <Loader size="medium">Loading</Loader>
      </Dimmer>
    }

    return(
      <div className="container">
        <h1>Lesdata</h1>

      </div>
    );
  }
}

LessonDatePage.propTypes = {
  actions: PropTypes.object.isRequired,
  isLoading: PropTypes.bool
};

// redux connect and related functions
function mapStateToProps(state, ownProps) {
  return {
    isLoading: state.ajaxCallsInProgress > 0,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LessonDatePage);
