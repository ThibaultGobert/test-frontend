import React from 'react';
import PropTypes from 'prop-types';
import BigCalendar from 'react-big-calendar';
import Reloader from '../../shared/Reloader';
import moment from 'moment';
import Toolbar from './CalendarToolbar';
import isEmpty from '../../../functions/isEmpty';
import { values } from 'lodash';
import mapToCalendar from '../../../api/mappers/mapToCalendar';

const Calendar = ({ refreshCalendar, events, showEventDetails }) => {
  BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

  const components = {
    toolbar: Toolbar,
  };

  const views = ['month', 'week', 'day'];

  return (
    <div className="container">
      <Reloader action={refreshCalendar} />
      <h1>Jouw kalender</h1>
      <p>Bekijk hier de lessen en klik door op een les om de details ervan te zien</p>
      <div className="calendar-wrapper">
        <div className="calendar">
          <BigCalendar
            views={views}
            culture="nl"
            events={[events[191]]}
            titleAccessor="name"
            defaultView="month"
            components={components}
            defaultDate={new Date()}
            onSelectEvent={event => showEventDetails(event)}
          />
        </div>
      </div>
    </div>
  );
};

Calendar.propTypes = {
  events: PropTypes.array.isRequired,
  refreshCalendar: PropTypes.func.isRequired,
  showEventDetails: PropTypes.func.isRequired,
};

Calendar.contextTypes = {
  router: PropTypes.object,
};

export default Calendar;
