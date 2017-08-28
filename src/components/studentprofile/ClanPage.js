import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class ClanPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return(
      <div>
        <h1>Jouw clan pagina - met alle lessen</h1>
      </div>
    );
  }
}

ClanPage.propTypes = {};

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

export default connect(mapStateToProps)(ClanPage);
