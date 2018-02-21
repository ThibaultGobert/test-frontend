import React from 'react';
import moment from 'moment';
import Message from 'semantic-ui-react/dist/commonjs/collections/Message/Message';
import 'moment/locale/nl';
import BigCalendar from 'react-big-calendar';
import Toolbar from './CalendarToolbar';
import './Calendar.css';

const Calendar = ({ events, showEventDetails }) => {
  BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));
  moment.locale('nl');

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
