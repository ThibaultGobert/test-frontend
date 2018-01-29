import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import Toolbar from './CalendarToolbar';
import './Calendar.css';

const Calendar = ({ events, showEventDetails }) => {
  BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

  const components = {
    toolbar: Toolbar,
  };

  const views = ['month', 'week', 'day'];
  return (
    <div className="container">
      <h1>Jouw kalender</h1>
      <p>Bekijk hier de lessen en klik door op een les om de details ervan te zien</p>
      <div className="calendar-wrapper">
        <div className="calendar">
          <BigCalendar
            views={views}
            culture="nl"
            events={events}
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

export default Calendar;
