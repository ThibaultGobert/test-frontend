import { connect } from 'react-redux';
import SlideViewerContainer from './SlideViewerContainer';
import * as userRoles from '../../../constants/roles';
import { fetchLessonSlidesStart, fetchLessonSlidesSuccess, fetchLessonSlidesError } from '../../../actions/slides';
import mapActionCreatorsToProps from '../../../functions/mapActionCreatorsToProps';
import { getSlidesByLessonId, getLessonById } from '../../../selectors';

import { withRouter } from 'react-router-dom';

function mapStateToProps(state, ownProps) {
  const lessonId = ownProps.match.params.id;
  const slideType = ownProps.match.params.type;
  const slides = getSlidesByLessonId(state, lessonId);
  const lesson = getLessonById(state, lessonId);

  return {
    slides,
    lesson,
    loading: state.slides.loading,
    hasError: state.slides.hasError,
    error: state.slides.error,
    lessonId: lessonId,
    slideType: slideType,
    isStudent: state.loggedIn.data.role === userRoles.STUDENT_ROLE || state.loggedIn.data.role === userRoles.WORKSHOP_STUDENT_ROLE
  };
}

const actionCreators = mapActionCreatorsToProps({
  fetchLessonSlidesStart,
  fetchLessonSlidesSuccess,
  fetchLessonSlidesError
});

export default withRouter(connect(mapStateToProps, actionCreators)(SlideViewerContainer));
