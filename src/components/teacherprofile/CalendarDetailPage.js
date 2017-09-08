import React from 'react';
import {Button} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as calendarActions from '../../actions/calendar';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import {Header} from 'semantic-ui-react';
import moment from 'moment';
import AttendanceList from './AttendanceList';

class CalendarDetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    browserHistory.goBack();
  }

  render() {
    return(
      <div className="calendar-details">
        <div className="back-button">
          <Button labelPosition="left" icon="left chevron" content="Terug" onClick={this.goBack}/>
        </div>
        <Header as="h1">{this.props.event.name} - {new Date(this.props.event.start).toLocaleDateString()}</Header>

        <div className="calendar-details-content">
          <div className="starttime">Startuur: {moment(this.props.event.start).format("HHumm")}</div>
          <div className="endtime">Einduur: {moment(this.props.event.end).format("HHumm")}</div>
          <div className="clan">Clan: {this.props.event.clan}</div>
          <div className="level">Level: {this.props.event.level}</div>
        </div>

        { this.props.course && <div className="attendanceList">
          <AttendanceList classlist={this.props.course.classlist}/>
        </div>}

        <div className="calendar-details-buttons">
          <Button>Klas</Button>
          <Button>Projectie</Button>
          <Button>Info</Button>
        </div>
      </div>
    );
  }
}

CalendarDetailPage.propTypes = {
  event: PropTypes.object.isRequired
};

function getEventById(events, id) {
  const event = events.filter(event => event.id == id);
  if (event) {
    return event[0];
  }
  return null;
}

function getCourseById(courses, id) {
  const course = courses.filter(course => course.id == id);
  if (course) {
    return course[0];
  }
  return null;
}

// redux connect and related functions
function mapStateToProps(state, ownProps) {
  const eventId = ownProps.params.eventId; // from path /course/:id
  let event = getEventById(state.calendar, eventId);
  let course = getCourseById(state.courses, event.courseId);
  return {
    event: event,
    course: course,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(calendarActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarDetailPage);

