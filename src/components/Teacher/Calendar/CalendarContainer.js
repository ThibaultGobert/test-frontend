import React, { Component } from 'react';
import Calendar from './Calendar';
import Loader from '../../shared/Loader';
import ErrorMessage from '../../shared/ErrorMessage';
import CelendarDetail from './CalendarDetail/CalendarDetailContainer';

class CalendarContainer extends Component {
  constructor(...props) {
    super(...props);
    this.toggleDetails = this.toggleDetails.bind(this);
    this.state = {
      calendarDetailOpen: false,
      event: null,
    };
  }

  toggleDetails(event) {
    this.setState({ calendarDetailOpen: !this.state.calendarDetailOpen, event });
  }

  render() {
    const { error, loading, lessons } = this.props;
    const { calendarDetailOpen, event } = this.state;

    if (loading) {
      return <Loader active />;
    }

    if (error) {
      return <ErrorMessage message={error.message} />;
    }

    return (
      <div className="CalendarContainer">
        { calendarDetailOpen && (
          <CelendarDetail isOpen={calendarDetailOpen} event={event} onClose={this.toggleDetails} />
        )}
        <Calendar
          events={lessons}
          refreshCalendar={this.fetchCourses}
          showEventDetails={this.toggleDetails}
          {...this.state}
        />
      </div>
    );
  }
}

export default CalendarContainer;
