import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapActionCreatorsToProps from '../../../../functions/mapActionCreatorsToProps';
import FeedbackContainer from './FeedbackContainer';
import { getNotesByStudentId } from '../../../../selectors';
import { fetchNotesStart, fetchNotesSuccess, fetchNotesError } from '../../../../actions/notes';

function mapStateToProps(state, ownProps) {
  const studentId = ownProps.user.id;
  const notes = getNotesByStudentId(state, studentId);
  return {
    notes
  };
}

const actionCreators = mapActionCreatorsToProps({
  fetchNotesStart,
  fetchNotesSuccess,
  fetchNotesError,
});

export default withRouter(connect(mapStateToProps, actionCreators)(FeedbackContainer));

