import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import Accordion from "../shared/Accordion";
import {Loader, Dimmer} from 'semantic-ui-react';
import * as courseActions from '../../actions/courses';


class ClassGroupsPage extends React.Component {
  // init state + bind functions
  constructor(props, context) {
    super(props, context);
    this.state = {
      panelsLoaded: false
    };

    this.mapToPanels = this.mapToPanels.bind(this);
  }

  componentDidMount() {
    this.props.actions.loadCourses();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.courses.length > 0) {
      let panels = this.mapToPanels(nextProps.courses);
      this.setState({
        panels: panels,
        panelsLoaded: true
      });
    }
  }

  mapToPanels(data) {
    let panels = data.map((course) => {
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
    let panelsReady = this.state.panelsLoaded && !this.props.isLoading;

    return(
      <div className="container">
        <h1>Klasgroepen</h1>
        <div className="subtitle">Bekijk hier je lessen en download de klaslijsten</div>
        { !panelsReady &&
          <Dimmer active>
            <Loader size="medium">Loading</Loader>
          </Dimmer>
        }
        { panelsReady && <Accordion panels={this.state.panels}/>}
      </div>
    );
  }
}

ClassGroupsPage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool
};

// redux connect and related functions
function mapStateToProps(state, ownProps) {
  return {
    isLoading: state.ajaxCallsInProgress > 0,
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassGroupsPage);
