import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import SlideViewer from './SlideViewer';
import {Icon, Loader} from 'semantic-ui-react';
import * as lessonActions from '../../../actions/lessons';
import toastr from 'toastr';

class SlideViewerPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToOverview = this.redirectToOverview.bind(this);
    this.state = {
      loadedSlides: false
    };
  }

  redirectToOverview() {
    browserHistory.goBack();
  }

  componentWillMount() {
    this.props.actions.loadLessonSlides(this.props.lesson.type, this.props.lesson.id).then(() => {
      this.setState({
        loadedSlides: true
      });
    }).catch(error => {
      toastr.error(error);
      browserHistory.goBack();
    });
  }

  render() {
    let slideshowkey = "slideshow"+ this.props.lesson.id;
    return (
      <div className="slide-show">
        {!this.state.loadedSlides && <Loader />}
        {this.state.loadedSlides &&
          <div>
            <div className="close-presentation" onClick={this.redirectToOverview}>
              <img src={require('../../../../images/slideviewer/cancel.png')} alt=""/>
            </div>

            <SlideViewer
              slides={this.props.lesson.slides}
              key={slideshowkey}
            />
          </div>
        }
      </div>
    );
  }
}

SlideViewerPage.propTypes = {};

function getLessonById(lessons, id) {
  const lesson = lessons.filter(lesson => lesson.id == id);
  if (lesson) {
    return lesson[0];
  }
  return null;
}


function mapStateToProps(state, ownProps) {
  const lessonId = ownProps.params.id;

  let lesson = getLessonById(state.lessons, lessonId);

  return {
    lesson: lesson
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(lessonActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SlideViewerPage);
