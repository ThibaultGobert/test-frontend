import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as lessonActions from '../../actions/lesson';

class ManagePage extends React.Component {
  // init state + bind functions
  constructor(props, context) {
    super(props, context);
  }


  // render function --> typically calling child component, here is markup inline
  render() {
    //const {lessons} = this.props;
    return(
      <div>
        <h1>Manage</h1>
      </div>
    );
  }
}

// redux connect and related functions
/*function mapStateToProps(state, ownProps) {
  return {
    lessons: state.lessons
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(lessonActions, dispatch)
  };
}
*/
export default ManagePage;
