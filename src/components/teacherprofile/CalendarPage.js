import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {Loader, Dimmer, Divider} from 'semantic-ui-react';
import * as calendarActions from '../../actions/calendar';
import Calendar from './Calendar';
import _ from 'lodash';

class CalendarPage extends React.Component {
  // init state + bind functions
  constructor(props, context) {
    super(props, context);
    this.state = {
      datesLoaded: false
    };
  }

  componentDidMount() {
    this.props.actions.loadCalendar();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.calendar.length > 0) {
      let dates = this.mapToDates(nextProps.calendar);
      this.setState({
        dates: dates,
        datesLoaded: true
      });
    }
  }

  mapToDates(data) {
    let lessons = data.map(course => {
      return course.lessons.map(lesson => {
        let element =Object.assign(lesson, {
            "course_name": course.name,
            "program_type": course.program_type,
            "clan": course.clan,
            "level": course.level,
          });
        element.name = lesson.name;
        element.start = this.createDate(lesson.startdate);
        element.end = this.createDate(lesson.enddate);
        return element;
      });
    });
    lessons = _.flatten(lessons);
    return lessons;
  }

  createDate(dateString) {
    let splitted = dateString.split(' ');
    const hour = splitted[1].split(':')[0];
    const minutes = splitted[1].split(':')[1];
    let dayMonthYear = splitted[0].split('-');
    const day = dayMonthYear[0];
    const month = parseInt(dayMonthYear[1]);
    const year = dayMonthYear[2];
    let date = new Date(year, month - 1, day, hour, minutes);
    return date;
  }

  render() {
    if (this.props.isLoading) {
      return (<Dimmer active>
        <Loader size="medium">Loading</Loader>
      </Dimmer>);
    }

    return(
      <div className="container">
        <h1>Jouw kalender</h1>
        <p>Bekijk hier de lessen en klik door op een les om de details ervan te zien</p>
        {this.state.datesLoaded && <Calendar dates={this.state.dates}/>}
      </div>
    );
  }
}

CalendarPage.propTypes = {
  actions: PropTypes.object.isRequired,
  isLoading: PropTypes.bool,
  calendar: PropTypes.array,
};

// redux connect and related functions
function mapStateToProps(state, ownProps) {
  return {
    isLoading: state.ajaxCallsInProgress > 0,
    calendar: state.calendar
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(calendarActions, dispatch)
  };
}

function findByKey(obj, key) {
  if (_.has(obj, key))
    return [obj[key]];

  let res = [];
  _.forEach(obj, function(v) {
    if (typeof v == "object" && (v = findByKey(v, key)).length)
      res.push.apply(res, v);
  });
  return res;
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarPage);
