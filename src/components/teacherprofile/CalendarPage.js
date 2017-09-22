import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import * as calendarActions from '../../actions/calendar';
import ErrorMessage from '../shared/ErrorMessage';
import Calendar from './Calendar';
import _ from 'lodash';
import Loader from "../shared/Loader";
import Reloader from '../shared/Reloader';

class CalendarPage extends React.Component {
  // init state + bind functions
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    if(_.isEmpty(this.props.calendar) && this.props.error == null) {
      this.props.actions.loadCalendar();
    }
  }

  componentDidUpdate() {
    if(!this.props.loading && _.isEmpty(this.props.calendar) && !this.props.hasError) {
      this.props.actions.loadCalendar();
    }
  }

  render() {
    return(
      <div className="container">
        <Reloader action={this.props.actions.loadCalendar}/>
        <h1>Jouw kalender</h1>
        <p>Bekijk hier de lessen en klik door op een les om de details ervan te zien</p>
        <Loader active={this.props.loading} />
        {!this.props.hasError && <Calendar dates={this.props.calendar}/>}
        { this.props.hasError && <ErrorMessage header="Fout bij inladen" message={this.props.error.message} />}
      </div>
    );
  }
}

CalendarPage.propTypes = {
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  calendar: PropTypes.array,
};

// redux connect and related functions
function mapStateToProps(state, ownProps) {
  return {
    calendar: state.calendar.data,
    loading: state.calendar.loading,
    error: state.calendar.error,
    hasError: state.calendar.hasError
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
