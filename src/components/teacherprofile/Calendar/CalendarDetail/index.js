import { connect } from 'react-redux';
import mapActionCreatorsToProps from '../../../../functions/mapActionCreatorsToProps';
import {loadCoursesIfNeeded} from '../../../../actions/courses';
import CalendarDetailContainer from './CalendarDetailContainer';

function mapStateToProps(state, ownProps) {
  const eventId = ownProps.params.eventId; // from path /course/:id
  const event = state.events[eventId];
  return {
    event: event,
  };
}

const actionCreators = mapActionCreatorsToProps({
  loadCoursesIfNeeded
});


export default connect(mapStateToProps, actionCreators)(CalendarDetailContainer);

