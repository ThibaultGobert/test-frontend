import React from 'react';
import moment from 'moment';
import { Label } from 'semantic-ui-react';
import 'moment/locale/nl';
import BigCalendar from 'react-big-calendar';
import Toolbar from './CalendarToolbar';
import eventPropGetter from './eventPropGetter';
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
      <div className="Calender__Header">
        <div className="Calender__Info">
          <h1>Jouw kalender</h1>
          <p>Bekijk hier de lessen en klik door op een les om de details ervan te zien</p>
        </div>
        <div className="Calender__Legend">
          <Label.Group size="small">
            <Label color="blue">Ingepland</Label>
            <Label color="red">Afwezig</Label>
            <Label color="orange">Vervangingsles</Label>
          </Label.Group>
        </div>
      </div>
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
            eventPropGetter={eventPropGetter}
          />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
