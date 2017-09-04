import React from 'react';
import PropTypes from 'prop-types';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import Toolbar from './CalendarToolbar';

class Calendar extends React.Component {
  constructor(props, context) {
    super(props, context);
    BigCalendar.momentLocalizer(moment); // or globalizeLocalizer
  }

  render() {
    let components = {
      toolbar: Toolbar
    };

    return (
      <div className="calendar">
        <BigCalendar
          culture="nl"
          events={this.props.dates}
          titleAccessor="name"
          defaultView="week"
          components={components}
          defaultDate={new Date()}
          onSelectEvent={event => alert(event.name)}
          onSelectSlot={(slotInfo) => alert(
            `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
            `\nend: ${slotInfo.end.toLocaleString()}`
          )}
        />
    </div>
    );
  }
}

Calendar.propTypes = {
  dates: PropTypes.array.isRequired
};



export default Calendar;
