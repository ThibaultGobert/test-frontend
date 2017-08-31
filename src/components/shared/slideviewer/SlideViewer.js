import React from 'react';
import {PropTypes} from 'prop-types';
import {Icon} from 'semantic-ui-react';
import renderHTML from 'react-render-html';

class SlideViewer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      index: 0,
      htmlContent: ''
    };

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

  componentDidMount() {
    let slide = this.props.slides[this.state.index];
    this.setState({
      htmlContent: slide.content
    });
  }

  nextSlide() {
    if (this.state.index < this.props.slides.length) {
      let newIndex = this.state.index + 1;
      let content = this.props.slides[newIndex].content;
      this.setState(
        {
          index: newIndex,
          htmlContent: content
        }
      );
    }
  }

  previousSlide() {
    if (this.state.index > 0) {
      let newIndex = this.state.index - 1;
      let content = this.props.slides[newIndex].content;
      this.setState(
        {
          index: newIndex,
          htmlContent: content
        }
      );
    }
  }
//          <Icon size="large" name="chevron left" onClick={this.previousSlide}/>

  render() {
    return (
      <div className="slide-show-content">
        <div className="left control-button" onClick={this.previousSlide}>
          <img src={require('../../../../images/slideviewer/previous.png')} alt=""/>
        </div>
        {renderHTML(this.state.htmlContent)}
        <div className="right control-button" onClick={this.nextSlide}>
          <img src={require('../../../../images/slideviewer/next.png')} alt=""/>
        </div>
      </div>
    );
  }
}

SlideViewer.propTypes = {
  slides: PropTypes.array.isRequired,
};

export default SlideViewer;
