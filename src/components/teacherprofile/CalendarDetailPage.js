import React from 'react';
import {Button, Message} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as calendarActions from '../../actions/calendar';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import {Header, Icon} from 'semantic-ui-react';
import moment from 'moment';
import AttendanceList from './AttendanceList';
import * as slideTypes from '../../constants/slideTypes';

class CalendarDetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    browserHistory.goBack();
  }

  render() {
    let slideviewerUrl = "/slideviewer/" + this.props.event.programlessonid;
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

        { this.props.course &&
          <AttendanceList classlist={this.props.course.classlist}/>
        }

        <Message className="aanwezigheden-info">
          <Message.Header>De aanwezigheden invullen</Message.Header>
          <p>Na les 2 gaat het mogelijk zijn om hier de aanwezigheden van de kinderen bij de les in te vullen</p>
        </Message>

        <div className="calendar-details-buttons">
          <Link to={slideviewerUrl + "/" + slideTypes.CLASS}>
            <Button primary><Icon name="group"/>Klas</Button>
          </Link>
          <Link to={slideviewerUrl + "/" + slideTypes.HOME}>
            <Button primary><Icon name="home"/>Thuis</Button>
          </Link>
          <Link to={slideviewerUrl + "/" + slideTypes.PROJECTION}>
            <Button primary><Icon name="tv"/>Projectie</Button>
          </Link>
          <Link to={slideviewerUrl + "/" + slideTypes.INFO}>
            <Button primary><Icon name="info"/>Info</Button>
          </Link>
          <Button disabled>Download lescontent</Button>

        </div>
      </div>
    );
  }
}

CalendarDetailPage.propTypes = {
  event: PropTypes.object.isRequired,
};

function getEventById(events, id) {
  const event = events.filter(event => event.id == id);
  if (event) {
    return event[0];
  }
  return null;
}

// redux connect and related functions
function mapStateToProps(state, ownProps) {
  const eventId = ownProps.params.eventId; // from path /course/:id
  let event = getEventById(state.calendar, eventId);
  return {
    event: event,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(calendarActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarDetailPage);

