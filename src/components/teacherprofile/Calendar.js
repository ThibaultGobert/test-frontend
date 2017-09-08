import React from 'react';
import PropTypes from 'prop-types';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import Toolbar from './CalendarToolbar';

class Calendar extends React.Component {
  constructor(props, context) {
    super(props, context);
    BigCalendar.momentLocalizer(moment); // or globalizeLocalizer
    this.showEventDetails = this.showEventDetails.bind(this);
    this.onDetailsClose = this.onDetailsClose.bind(this);
  }

  showEventDetails(event){
    this.context.router.push('/teacherprofile/calendar/' + event.id);
  }

  onDetailsClose() {
    this.setState({insert:false, event: null});
  }

  render() {
    let components = {
      toolbar: Toolbar
    };

    let views = ['month', 'week', 'day'];

    return (
      <div className="calendar-wrapper">
        <div className="calendar">
          <BigCalendar
            views={views}
            culture="nl"
            events={this.props.dates}
            titleAccessor="name"
            defaultView="month"
            components={components}
            defaultDate={new Date()}
            onSelectEvent={event => this.showEventDetails(event)}
          />
        </div>
      </div>
    );
  }
}

Calendar.propTypes = {
  dates: PropTypes.array.isRequired
};

Calendar.contextTypes = {
  router: PropTypes.object
};

export default Calendar;
