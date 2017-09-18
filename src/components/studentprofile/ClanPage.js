import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import LessonList from './LessonList';
import {bindActionCreators} from 'redux';
import * as lessonActions from '../../actions/lessons';
import {Dimmer, Loader} from 'semantic-ui-react';
import * as slideTypes from '../../constants/slideTypes';

class ClanPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    this.props.actions.loadLessons().then(() => {
      this.setState({
        isLoading: false
      });
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <Dimmer active>
          <Loader size="medium">Loading</Loader>
        </Dimmer>
      );
    }

    return(
      <div>
        <h1>Klaslessen</h1>
        <LessonList lessons={this.props.lessons} slideType={slideTypes.CLASS}/>
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
    lessons: state.lessons
  };
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(lessonActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ClanPage);
