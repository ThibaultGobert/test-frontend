import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import Accordion from "../shared/Accordion";
import ErrorMessage from '../shared/ErrorMessage';
import * as courseActions from '../../actions/courses';
import Loader from '../shared/Loader';
import _ from 'lodash';
import Reloader from "../shared/Reloader";

class ClassGroupsPage extends React.Component {
  // init state + bind functions
  constructor(props, context) {
    super(props, context);
    this.mapToPanels = this.mapToPanels.bind(this);
  }

  componentDidMount() {
    if(_.isEmpty(this.props.courses) && !this.props.hasError) {
      this.props.actions.loadCourses();
    }
  }

  componentDidUpdate() {
    if(!this.props.loading && _.isEmpty(this.props.courses) && !this.props.hasError) {
      this.props.actions.loadCourses();
    }
  }

  mapToPanels(data) {

    const {
      locations,
      users
    } = this.props;

    let panels = data.map((course) => {
      let headTeacher = users[course.headTeacher];
      let assistants = course.assistants.map((userId) => {
        return users[userId];
      });
      let location = locations[course.location]

      return {
        title: {
          name: course.name,
          type: course.type,
          group: course.clan,
          level: course.level,
          location: location.name,
        },
        content: {
          id: course.id,
          headteacher: {
            name: headTeacher.firstname + ' ' + headTeacher.lastname,
            email: headTeacher.email,
            phone: headTeacher.phone,
            cellphone: headTeacher.cellphone
          },
          assistants: assistants,
          location: {
            address: location.address,
            city: location.city,
            organisation: location.organisation,
            room: location.roomname,
            roomremark: location.roomremark
          }
        }
      };
    });
    return panels;
  }

  render() {
    let panels = this.mapToPanels(this.props.courses);
    return(
      <div className="container">
        <Loader active={this.props.loading}/>
        <Reloader action={this.props.actions.loadCourses}/>
        <h1>Klasgroepen</h1>
        <div className="subtitle">Bekijk hier je lessen en download de klaslijsten</div>
        { !this.props.hasError && <Accordion panels={panels}/>}
        { this.props.hasError && <ErrorMessage header="Fout bij inladen" message={this.props.error.message} />}
      </div>
    );
  }
}

ClassGroupsPage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  error: PropTypes.object,
  hasError: PropTypes.bool,
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.courses.loading,
    courses: Object.values(state.courses.data),
    error: state.courses.error,
    hasError: state.courses.hasError,
    users: state.users.data,
    locations: state.locations.data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassGroupsPage);
