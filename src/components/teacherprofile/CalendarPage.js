import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {Loader, Dimmer} from 'semantic-ui-react';
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
      this.setState({
        dates: nextProps.calendar,
        datesLoaded: true
      });
    }
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
