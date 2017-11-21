import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapActionCreatorsToProps from '../../../../functions/mapActionCreatorsToProps';
import CalendarDetailContainer from './CalendarDetailContainer';

function mapStateToProps(state, ownProps) {
  const eventId = ownProps.params.eventId; // from path /course/:id
  const event = state.events[eventId];
  return {
    event,
  };
}

export default withRouter(connect(mapStateToProps)(CalendarDetailContainer));

