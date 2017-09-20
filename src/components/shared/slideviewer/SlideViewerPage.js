import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import SlideViewer from './SlideViewer';
import * as lessonActions from '../../../actions/lessons';
import LoaderHOC from '../hoc/LoaderHOC';
import {Loader, Dimmer} from 'semantic-ui-react';
import * as userRoles from '../../../constants/roles';
import toastr from 'toastr';

class SlideViewerPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToOverview = this.redirectToOverview.bind(this);
    this.state = {
      isLoading: true,
    };
  }

  componentWillMount() {
    this.props.actions.loadLessonSlides(this.props.lessonId, "CLASSHOME", this.props.slideType).then(() => {
      this.setState({
        isLoading: false
      });
    }).catch(error => {
      toastr.error("Les is niet beschikbaar");
      this.redirectToOverview();
    });
  }

  redirectToOverview() {
    browserHistory.goBack();
  }

  render() {
    let slideshowkey = "slideshow"+ this.props.lessonId;

    if (this.state.isLoading) {
      return (
        <Dimmer active>
          <Loader size="medium">Loading</Loader>
        </Dimmer>
      );
    }

    let metadata = {"title": this.props.lesson.name, "version": this.props.lesson.version, "slideType": this.props.lesson.slideType};

    return (
      <div className="slideViewerPage">
        <div className="slide-show">
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
        </div>
      </div>
    );
  }
}

SlideViewerPage.propTypes = {
  actions: PropTypes.object.isRequired,
};

function getLessonById(lessons, id, slideType) {
  const lesson = lessons.filter(lesson => lesson.programlessonid == id && lesson.slideType == slideType);
  if (lesson) {
    return lesson[0];
  }
  return null;
}

function mapStateToProps(state, ownProps) {
  const lessonId = ownProps.params.id;
  const slideType = ownProps.params.type;
  const lesson = getLessonById(state.lessons, lessonId, slideType);


  return {
    lessonId: lessonId,
    slideType: slideType,
    lesson: lesson,
    isStudent: state.loggedIn.role == userRoles.STUDENT_ROLE
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(lessonActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SlideViewerPage);
