import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Accordeon from "../shared/Accordeon";

class OverviewPage extends React.Component {
  // init state + bind functions
  constructor(props, context) {
    super(props, context);

    this.state = {
      panels: [
        {
          title: "Dit is je eerste les",
          content: "Wie zijn jouw assistenten voor les 1"
        },
        {
          title: "En de tweede les",
          content: "Wie zijn jouw assistenten voor les 2"
        }
      ]
    };
  }



  // render function --> typically calling child component, here is markup inline
  render() {
    //const {lessons} = this.props;
    return(
      <div className="wrapper">
        <h1>Overzicht lessen</h1>
        <Accordeon panels={this.state.panels}/>
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
}*/

export default OverviewPage;
