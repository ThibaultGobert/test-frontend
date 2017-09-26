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

class SlideViewerPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToOverview = this.redirectToOverview.bind(this);
    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
    if(this.props.error == null) {
      this.props.actions.loadLessonSlides(this.props.lessonId, "CLASSHOME", this.props.slideType).then(data => {
        this.setState({loaded: true});
      }).catch(error => {
        toastr.error("Les is niet beschikbaar");
        this.redirectToOverview();
      });
    }
  }

  redirectToOverview() {
    browserHistory.goBack();
  }

  render() {
    let slideshowkey = "slideshow"+ this.props.lessonId;

    let metadata = {"title": this.props.lesson.name, "version": this.props.lesson.version, "slideType": this.props.lesson.slideType};

    return (
      <div className="slideViewerPage">
        <Loader active={!this.state.loaded} />

        { this.state.loaded && <div className="slide-show">
          <div>
            <div className="close-presentation" onClick={this.redirectToOverview}>
              <img src={require('../../../../images/slideviewer/close.png')} alt=""/>
            </div>

            <SlideViewer
              slides={this.props.lesson.slides}
              key={slideshowkey}
              metadata={metadata}
              isStudent={this.props.isStudent}
            />
          </div>
        </div>}
      </div>
    );
  }
}

SlideViewerPage.propTypes = {
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
  const lessonId = ownProps.params.id;
  const slideType = ownProps.params.type;
  const lesson = state.currentLesson.data;

  return {
    lessonId: lessonId,
    slideType: slideType,
    lesson: lesson,
    loading: state.currentLesson.loading,
    isStudent: state.loggedIn.data.role == userRoles.STUDENT_ROLE
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(lessonActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SlideViewerPage);
