import React from 'react';
import {connect} from 'react-redux';

class OverviewPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <h1>Editoroverview</h1>
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

export default connect(mapStateToProps)(OverviewPage);
