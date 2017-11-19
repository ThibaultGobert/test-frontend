import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import SlideViewer from './SlideViewer';
import * as lessonActions from '../../../actions/lessons';
import * as userRoles from '../../../constants/roles';
import Loader from '../../shared/Loader';
import toastr from 'toastr';
import _ from 'lodash';
import lessonApi from '../../../api/lessons';

class SlideViewerPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToOverview = this.redirectToOverview.bind(this);
    this.state = {
      lesson: {},
      hasError: false,
      error: null,
      loading: true,
    };
  }

  componentWillMount() {
    const {fetchLessonSlidesStart, fetchLessonSlidesSuccess, fetchLessonSlidesError} = this.props;
    if(_.isEmpty(this.state.lesson) && !this.state.hasError) {
      this.setState({loading: true});
      fetchLessonSlidesStart();
      lessonApi.getLessonSlides(this.props.lessonId, "CLASSHOME", this.props.slideType).then(data => {
        fetchLessonSlidesSuccess(data);
        this.setState({
          lesson: data,
          hasError: false,
          error: null,
          loading: false,
        });
      }).catch(error => {
        fetchLessonSlidesError();
        this.setState({
          hasError: true,
          error: error,
          loading: false,
        });
        this.redirectToOverview();
        toastr.error(error);
      });
    }
  }

  redirectToOverview() {
    browserHistory.goBack();
  }

  render() {
    if (this.state.loading) {
      return (<Loader active={this.state.loading} />);
    }

    let slideshowkey = "slideshow"+ this.props.lessonId;

    let metadata = {"title": this.state.lesson.name, "version": this.state.lesson.version, "slideType": this.state.lesson.slideType};

    return (
      <div className="slideViewerPage">
        { (!_.isEmpty(this.state.lesson) && !this.state.loading && !this.state.hasError) &&
          <div className="slide-show">
            <div className="close-presentation" onClick={this.redirectToOverview}>
              <img src={require('../../../assets/images/slideviewer/close.png')} alt=""/>
            </div>

            <SlideViewer
              slides={this.state.lesson.slides}
              key={slideshowkey}
              metadata={metadata}
              isStudent={this.props.isStudent}
            />
          </div>
        }
      </div>
    );
  }
}

SlideViewerPage.propTypes = {
  actions: PropTypes.object.isRequired,
  lessonId: PropTypes.string.isRequired,
  slideType: PropTypes.string.isRequired,
  isStudent: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  const lessonId = ownProps.params.id;
  const slideType = ownProps.params.type;

  return {
    lessonId: lessonId,
    slideType: slideType,
    isStudent: state.loggedIn.data.role === userRoles.STUDENT_ROLE || state.loggedIn.data.role === userRoles.WORKSHOP_STUDENT_ROLE
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(lessonActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SlideViewerPage);
