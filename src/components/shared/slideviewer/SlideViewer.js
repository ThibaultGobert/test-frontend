import React from 'react';
import {PropTypes} from 'prop-types';
import QuestionSlide from "./QuestionSlide";
import TextSlide from './TextSlide';
import keydown, {Keys} from 'react-keydown';
import TagBar from "./TagBar";

class SlideViewer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      index: 0,
      slide: null,
      tags: []
    };

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
    this.mapToTags = this.mapToTags.bind(this);
  }

  componentWillMount() {
    let slide = this.props.slides[this.state.index];
    this.setState({
      slide: slide
    });
  }

  nextSlide() {
    if (this.state.index < this.props.slides.length - 1) {
      let newIndex = this.state.index + 1;
      let slide = this.props.slides[newIndex];
      this.setState(
        {
          index: newIndex,
          slide: slide
        }
      );
    }
  }

  previousSlide() {
    if (this.state.index > 0) {
      let newIndex = this.state.index - 1;
      let slide = this.props.slides[newIndex];

      this.setState(
        {
          index: newIndex,
          slide: slide
        }
      );
    }
  }

  renderSlide() {
    let slide = this.state.slide;
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

  mapToTags() {
    return [this.state.slide.part, this.state.slide.method, this.state.slide.execution];
  }

  render() {
    return (
      <div>
        <TagBar title={this.props.metadata.title} version={this.props.metadata.version} slideType={this.props.metadata.slideType} tags={this.mapToTags()} viewType={this.state.slide.type} isStudent={this.props.isStudent}/>
        <div className="slide-show-content">
          <div className="slide-show-inner-content">
            { this.state.index > 0 && <div className="left control-button" onClick={this.previousSlide}>
              <img src={require('../../../../images/slideviewer/left.png')} alt=""/>
            </div>}
            {this.renderSlide()}
            { this.state.index < this.props.slides.length - 1 && <div className="right control-button" onClick={this.nextSlide}>
              <img src={require('../../../../images/slideviewer/right.png')} alt=""/>
            </div>}
          </div>
        </div>
      </div>
    );
  }
}

SlideViewer.propTypes = {
  slides: PropTypes.array,
  metadata: PropTypes.object.isRequired,
  isStudent: PropTypes.bool
};

export default SlideViewer;
