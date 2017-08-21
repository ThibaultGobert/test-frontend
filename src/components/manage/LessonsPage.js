import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as lessonActions from '../../actions/lesson';
import LessonsForm from "./LessonsForm";

class LessonsPage extends React.Component {
  // init state + bind functions
  constructor(props, context) {
    super(props, context);

    this.state = {
      searchFields: {}
    };

    this.updateSearchFields = this.updateSearchFields.bind(this);
  }

  updateSearchFields(event) {
    const field = event.target.name;
    let searchFields = Object.assign({}, this.state.searchFields);
    searchFields[field] = event.target.value;
    return this.setState({searchFields: searchFields});
  }


  // render function --> typically calling child component, here is markup inline
  render() {
    //const {lessons} = this.props;
    return(
      <div>
        <h1>Manage Lessons</h1>
        <LessonsForm onChange={this.updateSearchFields}/>
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
export default LessonsPage;
