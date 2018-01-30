import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SlideViewerContainer from './SlideViewerContainer';
import { fetchLessonSlidesStart, fetchLessonSlidesSuccess, fetchLessonSlidesError } from '../../../actions/slides';
import mapActionCreatorsToProps from '../../../functions/mapActionCreatorsToProps';
import { getSlidesByLessonId, getLessonById, isStudent as isStudentSelector } from '../../../selectors';

function mapStateToProps(state, ownProps) {
  const lessonId = ownProps.match.params.id;
  const slideType = ownProps.match.params.type;
  const slides = getSlidesByLessonId(state, lessonId);
  const lesson = getLessonById(state, lessonId);
  const isStudent = isStudentSelector(state);

  return {
    slides,
    lesson,
    loading: state.slides.loading,
    hasError: state.slides.hasError,
    error: state.slides.error,
    lessonId,
    slideType,
    isStudent,
  };
}

const actionCreators = mapActionCreatorsToProps({
  fetchLessonSlidesStart,
  fetchLessonSlidesSuccess,
  fetchLessonSlidesError
});

export default withRouter(connect(mapStateToProps, actionCreators)(SlideViewerContainer));
