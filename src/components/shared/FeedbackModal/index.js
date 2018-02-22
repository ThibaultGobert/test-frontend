import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapActionCreatorsToProps from '../../../functions/mapActionCreatorsToProps';
import FeedbackContainer from './FeedbackContainer';
import { getNotesByStudentId } from '../../../selectors';
import {
  fetchNotesStart,
  fetchNotesSuccess,
  fetchNotesError,
  editNoteStart,
  editNoteSuccess,
  editNoteError,
  addNoteStart,
  addNoteSuccess,
  addNoteError,
} from '../../../actions/notes';

function mapStateToProps(state, ownProps) {
  const studentId = ownProps.user.id;
  const notes = getNotesByStudentId(state, studentId);
  return {
    studentId,
    notes,
  };
}

const actionCreators = mapActionCreatorsToProps({
  fetchNotesStart,
  fetchNotesSuccess,
  fetchNotesError,
  editNoteStart,
  editNoteSuccess,
  editNoteError,
  addNoteStart,
  addNoteSuccess,
  addNoteError,
});

export default withRouter(connect(mapStateToProps, actionCreators)(FeedbackContainer));

