import React from 'react';
import PropTypes from 'prop-types';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import Toolbar from './CalendarToolbar';
import {Modal, Header, Image} from 'semantic-ui-react';
import CalendarDetails from "./CalendarDetails";

class Calendar extends React.Component {
  constructor(props, context) {
    super(props, context);
    BigCalendar.momentLocalizer(moment); // or globalizeLocalizer
    this.showEventDetails = this.showEventDetails.bind(this);
    this.onDetailsClose = this.onDetailsClose.bind(this);
    this.state= {
      insert: false
    };
  }

  showEventDetails(event){
    this.setState({insert:true, event: event});
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
        { this.state.insert &&
        <CalendarDetails
          event={this.state.event}
          onDetailsClose={this.onDetailsClose}
          isOpen={this.state.insert}
        />
        }

        <div className="calendar">
          <BigCalendar
            views={views}
            culture="nl"
            events={this.props.dates}
            titleAccessor="name"
            defaultView="week"
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



export default Calendar;
