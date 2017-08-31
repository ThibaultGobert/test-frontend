import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Accordeon from "../shared/Accordion";
import { Divider } from 'semantic-ui-react';
import * as lessonActions from '../../actions/courses';


class ClassGroupsPage extends React.Component {
  // init state + bind functions
  constructor(props, context) {
    super(props, context);
    this.state = {
      panels: this.mapToPanels(props)
    };
  }

  componentWillReceiveProps(nextProps) {
    let panels = this.mapToPanels(nextProps);
    this.setState({panels: panels});
  }


  mapToPanels(data) {
    let panels = data.courses.map((course) => {
      return {
        title: {
          group: course.clan,
          level: course.level,
          day: course.day,
          time: course.starttime + ' - ' + course.endtime,
          location: course.location.name,
        },
        content: {
          id: course.id,
          headteacher: {
            name: course.headteacher.name,
            email: course.headteacher.email,
            contact: course.headteacher.contact
          },
          assistents: course.assistents,
          location: {
            address: course.location.address,
            city: course.location.city,
            organisation: course.location.organisation,
            room: course.location.room
          }
        }
      };
    });
    return panels;
  }

// render function --> typically calling child component, here is markup inline
  render() {
    //const {lessons} = this.props;
    return(
      <div className="container">
        <h1>Klasgroepen</h1>
        <div className="subtitle">Bekijk hier je lessen en download de klaslijsten</div>
        <Accordeon panels={this.state.panels}/>
      </div>
    );
  }
}

// redux connect and related functions
function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(lessonActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassGroupsPage);
