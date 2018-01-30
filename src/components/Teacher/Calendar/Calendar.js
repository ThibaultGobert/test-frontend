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
      <Message negative>
        <Message.Header>Deze planning is nog niet definitief</Message.Header>
        <p>
          Alles hangt af van de effectieve inschrijvingen. De finale planning vind je hier 5 dagen
          voor de start van lesreeks. We weten dat dit niet ideaal is en vragen je begrip!
        </p>
      </Message>
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
