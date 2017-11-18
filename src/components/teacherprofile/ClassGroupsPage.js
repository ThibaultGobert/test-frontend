import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Accordion from '../shared/Accordion';
import ErrorMessage from '../shared/ErrorMessage';
import { fetchCoursesStart, fetchCoursesSuccess, fetchCoursesError } from '../../actions/courses';
import Loader from '../shared/Loader';
import _ from 'lodash';
import courseApi from '../../api/courses';
import Reloader from '../shared/Reloader';
import mapActionCreatorsToProps from '../../functions/mapActionCreatorsToProps';

class ClassGroupsPage extends React.Component {
  constructor(...props) {
    super(...props);

    this.mapToPanels = this.mapToPanels.bind(this);
  }

  componentDidMount() {
    // TODO: make use of selector
    if (_.isEmpty(this.props.courses) && !this.props.error) {

      this.fetchCourses();
    }
  }

  componentDidUpdate() {
    // TODO: make use of selector
    if (!this.props.loading && _.isEmpty(this.props.courses) && !this.props.error) {
      this.fetchCourses();
    }
  }

  fetchCourses() {
    this.props.actions.fetchCoursesStart();

    courseApi
      .getCourses(false)
      .then(this.props.actions.fetchCoursesSuccess)
      .catch(this.props.actions.fetchCoursesError);
  }

  mapToPanels() {
    const { locations, users, courses } = this.props;

    return courses.map(course => {
      const headTeacher = users[course.headTeacher];
      const assistants = course.assistants.map(userId => {
        return users[userId];
      });
      const location = locations[course.location];

      return {
        title: {
          name: course.name,
          type: course.type,
          group: course.clan,
          level: course.level,
          location: location.name
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
  }

  render() {
    const { error, loading, actions } = this.props;
    const panels = this.mapToPanels();

    return (
      <div className="container">
        <Loader active={loading} />
        <Reloader action={actions.loadCourses} />

        <h1>Klasgroepen</h1>
        <div className="subtitle">Bekijk hier je lessen en download de klaslijsten</div>

        {!error && <Accordion panels={panels} />}
        {error && <ErrorMessage header="Fout bij inladen" message={error.message} />}
      </div>
    );
  }
}

ClassGroupsPage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  error: PropTypes.object
};

// TODO: move this to an index.js file.
function mapStateToProps(state, ownProps) {
  return {
    loading: state.courses.loading,
    courses: Object.values(state.courses.data),
    error: state.courses.error,
    users: state.users.data,
    locations: state.locations.data
  };
}

const actionCreators = mapActionCreatorsToProps({
  fetchCoursesStart,
  fetchCoursesSuccess,
  fetchCoursesError
});

export default connect(mapStateToProps, actionCreators)(ClassGroupsPage);
