import React from 'react';
import {PropTypes} from 'prop-types';
import QuestionSlide from "./QuestionSlide";
import TextSlide from './TextSlide';
import keydown, {Keys} from 'react-keydown';

class SlideViewer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      index: 0,
      slide: null
    };

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
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

  render() {
    return (
      <div>
        <div className="slide-show-content">
          <div className="slide-show-inner-content">
            { this.state.index > 0 && <div className="left control-button" onClick={this.previousSlide}>
              <img src={require('../../../../images/slideviewer/knoplinks.png')} alt=""/>
            </div>}
            {this.renderSlide()}
            { this.state.index < this.props.slides.length - 1 && <div className="right control-button" onClick={this.nextSlide}>
              <img src={require('../../../../images/slideviewer/knoprechts.png')} alt=""/>
            </div>}
          </div>
        </div>
      </div>
    );
  }
}

SlideViewer.propTypes = {
  slides: PropTypes.array.isRequired,
};

export default SlideViewer;
