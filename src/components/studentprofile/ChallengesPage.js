import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class ChallengesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <h1>Jouw clan pagina - met alle lessen</h1>
      </div>
    );
  }
}

ChallengesPage.propTypes = {};

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

export default connect(mapStateToProps)(ChallengesPage);
