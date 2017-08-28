import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class OverviewPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <h1>Adminoverview</h1>
      </div>
    );
  }
}

OverviewPage.propTypes = {};

function mapStateToProps(state, ownProps) {
  return {
    state: state
  };
}


/*function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}*/

export default connect(mapStateToProps)(OverviewPage);
