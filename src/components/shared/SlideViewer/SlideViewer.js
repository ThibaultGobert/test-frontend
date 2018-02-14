import React from 'react';
import { Progress } from 'semantic-ui-react';
import { Scrollbars } from 'react-custom-scrollbars';
import _ from 'lodash';

import QuestionSlide from './QuestionSlide';
import TextSlide from './TextSlide';
import TagBar from './TagBar';
import MetaSlideData from './MetaSlideData';
import ErrorMessage from '../../shared/ErrorMessage';
import './SlideViewer.css';

class SlideViewer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      index: 0,
      slide: this.props.slides ? this.props.slides[0] : null,
    };

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
    this.mapToTags = this.mapToTags.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    // Add Event Listener on compenent mount
    window.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.slides && !_.isEmpty(newProps.slides)) {
      const slide = newProps.slides[this.state.index];
      this.setState({ slide });
    }
  }

  componentWillUnmount() {
    // Remove event listener on compenent unmount
    window.removeEventListener('keyup', this.handleKeyPress);
  }

  nextSlide() {
    if (this.state.index < this.props.slides.length - 1) {
      const index = this.state.index + 1;
      const slide = this.props.slides[index];
      this.setState({ index, slide });
    }
  }

  previousSlide() {
    if (this.state.index > 0) {
      const index = this.state.index - 1;
      const slide = this.props.slides[index];
      this.setState({ index, slide });
    }
  }

  mapToTags() {
    if (this.state.slide) {
      return [this.state.slide.part, this.state.slide.method, this.state.slide.execution];
    }
  }

  handleKeyPress(e) {
    e.preventDefault();
    if (e.key === 'ArrowRight') {
      this.nextSlide();
    }
    if (e.key === 'ArrowLeft') {
      this.previousSlide();
    }
  }

  renderSlide() {
    let slide = this.state.slide;
    if (slide) {
      let renderedHtml;
      if (slide.question) {
        renderedHtml = <QuestionSlide
          title={slide.title}
          question={slide.question.value}
          answers={slide.question.answers}
          layout={slide.question.layout}
          nextSlide={this.nextSlide}
        />;
      } else {
        renderedHtml = <TextSlide title={slide.title} content={slide.content} />;
      }
      return renderedHtml;
    }
    return <ErrorMessage message="Geen slideinhoud gevonden" />;
  }

  render() {
    const hideLeftButton = this.state.index > 0 ? "" : "hide";
    const hideRightButton = this.state.index < this.props.slides.length - 1 ? "": "hide";
    const slideViewerClassName = "slide-viewer " + this.props.metadata.slideType;
    return (
      <div className={slideViewerClassName}>
        {this.state.slide && <TagBar
          title={this.props.metadata.title}
          version={this.props.metadata.version}
          slideType={this.props.metadata.slideType}
          tags={this.mapToTags()}
          viewType={this.state.slide.type}
          isStudent={this.props.isStudent}
          slide={this.state.slide}
        />}
        <div className="slide-show-content">
          <div className="slide-show-inner-content">
            <div className={hideLeftButton + " left control-button"} onClick={this.previousSlide}>
              <img src={require('../../../assets/images/slideviewer/back.png')} alt=""/>
            </div>
            <Scrollbars className="scrollbars" autoHeightMax={200}>
              { this.renderSlide() }
            </Scrollbars>
            <div className={hideRightButton + " right control-button"} onClick={this.nextSlide}>
              <img src={require('../../../assets/images/slideviewer/next.png')} alt=""/>
            </div>
          </div>
        </div>
        <MetaSlideData
          slide={this.state.slide}
          lesson={this.props.lesson}
          slideType={this.props.metadata.slideType}
          />
        <div className="progress-bar">
          <Progress percent={((this.state.index + 1) / this.props.slides.length)*100} />
        </div>
      </div>
    );
  }
}

export default SlideViewer;
