import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Calendar from "./Calendar";
import Loader from "../../shared/Loader";
import ErrorMessage from "../../shared/ErrorMessage";

class CalendarContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.loadCalendar = this.loadCalendar.bind(this);
  }

  componentDidMount() {
    this.loadCalendar();
  }

  showEventDetails(event){
    this.context.router.push('/teacherprofile/calendar/' + event.id);
  }

  loadCalendar() {
    const {loadCoursesIfNeeded} = this.props.actions;
    loadCoursesIfNeeded();
  }

  render() {
    const { error, loading, events, hasError } = this.props;

    if (loading) {
      return (
        <Loader active/>
      );
    }

    if (hasError) {
      return (<ErrorMessage message={error.message} />);
    }

    return (
      <div className="CalendarContainer">
        <Calendar
          events={events}
          refreshCalendar={this.loadCalendar}
          showEventDetails={this.showEventDetails}
          {...this.state}
        />
      </div>
    );
  }
}

CalendarContainer.propTypes = {
  loading: PropTypes.bool,
  events: PropTypes.array,
  hasError: PropTypes.bool.isRequired,
  error: PropTypes.object.isRequired
};


CalendarContainer.contextTypes = {
  router: PropTypes.object
};

export default CalendarContainer;
