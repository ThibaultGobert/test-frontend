import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CalendarDetailContainer from './CalendarDetailContainer';

function mapStateToProps(state, { match }) {
  const eventId = match.params.eventId; // from path /course/:id
  const event = state.lessons.data[eventId];

  return {
    event,
  };
}

export default withRouter(connect(mapStateToProps)(CalendarDetailContainer));

