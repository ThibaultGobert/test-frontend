import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class HomeworkPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <h1>Jouw extra uitdaging</h1>
      </div>
    );
  }
}

HomeworkPage.propTypes = {};

function mapStateToProps(state, ownProps) {
  return {
    state: state
  };
}


/* function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}*/

export default connect(mapStateToProps)(HomeworkPage);
