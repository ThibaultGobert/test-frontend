import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Accordeon from "../shared/Accordeon";
import { Divider } from 'semantic-ui-react';
import * as lessonActions from '../../actions/lesson';


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

    console.log(this.props);
  }



  // render function --> typically calling child component, here is markup inline
  render() {
    //const {lessons} = this.props;
    return(
      <div className="container">
        <h1>Overzicht lessen</h1>
        <Divider/>
        <Accordeon panels={this.state.panels}/>
      </div>
    );
  }
}

// redux connect and related functions
function mapStateToProps(state, ownProps) {
  return {
    state: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(lessonActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OverviewPage);
