import React from 'react';
import PropTypes from 'prop-types';
import SlideViewer from './SlideViewer';
import Loader from '../../shared/Loader';
import toastr from 'toastr';
import _ from 'lodash';
import slidesApi from '../../../api/slides';

class SlideViewerContainer extends React.Component {
  constructor(...props) {
    super(...props);
    this.redirectToOverview = this.redirectToOverview.bind(this);
  }

  componentDidMount() {
    const {fetchLessonSlidesStart, fetchLessonSlidesSuccess, fetchLessonSlidesError} = this.props.actions;
    fetchLessonSlidesStart();
    slidesApi.getLessonSlides(this.props.lessonId, this.props.slideType).then(data => {
      fetchLessonSlidesSuccess(data);
    }).catch(error => {
      fetchLessonSlidesError(error);
      this.redirectToOverview();
      toastr.error(error);
    });
  }

  redirectToOverview() {
    const { history } = this.props;
    history.goBack();
  }

  render() {

    const {
      lesson,
      slides,
      isStudent,
      loading,
      hasError,
      slideType
    } = this.props;

    if (loading) {
      return (<Loader active />);
    }

    let slideshowkey = "slideshow"+ this.props.lessonId;
    let metadata;
    if (lesson) {
      metadata = {"title": lesson.name, "version": lesson.version, "slideType": slideType};
    }

    return (
      <div className="slideViewerPage">
        { (!_.isEmpty(slides) && !loading && !hasError) &&
          <div className="slide-show">
            <div className="close-presentation" onClick={this.redirectToOverview}>
              <img src={require('../../../assets/images/slideviewer/close.png')} alt=""/>
            </div>

            <SlideViewer
              slides={slides}
              key={slideshowkey}
              metadata={metadata}
              isStudent={isStudent}
              lesson={lesson}
            />
          </div>
        }
      </div>
    );
  }
}

SlideViewerContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  lessonId: PropTypes.string.isRequired,
  slideType: PropTypes.string.isRequired,
  isStudent: PropTypes.bool.isRequired
};

export default SlideViewerContainer;
