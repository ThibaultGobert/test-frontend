import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CalendarDetailContainer from './CalendarDetailContainer';
import { getCourseById } from '../../../../selectors';

function mapStateToProps(state, { match }) {
  const eventId = match.params.eventId; // from path /course/:id
  const event = state.lessons.data[eventId];
  const course = getCourseById(state, event.courseid);

  return {
    event,
    course,
  };
}

export default withRouter(connect(mapStateToProps)(CalendarDetailContainer));

