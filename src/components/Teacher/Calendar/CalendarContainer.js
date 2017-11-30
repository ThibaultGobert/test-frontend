import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Calendar from './Calendar';
import Loader from '../../shared/Loader';
import ErrorMessage from '../../shared/ErrorMessage';

class CalendarContainer extends Component {
  constructor(...props) {
    super(...props);
    this.showEventDetails = this.showEventDetails.bind(this);
  }

  showEventDetails(event) {
    const { history } = this.props;
    history.push(`/teacherprofile/calendar/${event.id}`);
  }

  render() {
    const { error, loading, lessons } = this.props;

    if (loading) {
      return <Loader active />;
    }

    if (error) {
      return <ErrorMessage message={error.message} />;
    }

    return (
      <div className="CalendarContainer">
        <Calendar
          events={lessons}
          refreshCalendar={this.fetchCourses}
          showEventDetails={this.showEventDetails}
          {...this.state}
        />
      </div>
    );
  }
}

CalendarContainer.propTypes = {
  loading: PropTypes.bool,
  lessons: PropTypes.arrayOf(PropTypes.object),
  error: PropTypes.object,
};

export default CalendarContainer;
