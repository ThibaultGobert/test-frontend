import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FeedbackContainer from './FeedbackContainer';
import { getNotesByStudentId } from '../../../../selectors';

function mapStateToProps(state, ownProps) {
  const studentId = ownProps.user.id;
  const notes = getNotesByStudentId(state, studentId);
  debugger;
  return {
    notes
  };
}

export default withRouter(connect(mapStateToProps)(FeedbackContainer));

