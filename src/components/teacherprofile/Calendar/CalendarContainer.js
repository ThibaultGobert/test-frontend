import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Calendar from './Calendar';
import Loader from '../../shared/Loader';
import ErrorMessage from '../../shared/ErrorMessage';
import _ from 'lodash';
import courseApi from '../../../api/courses';

class CalendarContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.fetchCourses.bind(this);
  }

  componentDidMount() {
    // TODO: make use of selector
    if (_.isEmpty(this.props.courses) && !this.props.error) {
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

  showEventDetails(event) {
    this.context.router.push('/teacherprofile/calendar/' + event.id);
  }

  render() {
    const { error, loading, courses } = this.props;

    if (loading) {
      return <Loader active />;
    }

    if (error) {
      return <ErrorMessage message={error.message} />;
    }

    return (
      <div className="CalendarContainer">
        <Calendar
          events={courses}
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
  courses: PropTypes.array,
  error: PropTypes.object
};

CalendarContainer.contextTypes = {
  router: PropTypes.object
};

export default CalendarContainer;
