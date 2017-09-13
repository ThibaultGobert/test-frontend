import React from 'react';
import PropTypes from 'prop-types';
import renderHtml from 'react-render-html';

const TextSlide = ({title, content}) => {
  return(
    <div className="text-slide">
      <h1>{title}</h1>
      <div className="text-slide-content">
        {renderHtml(content)}
      </div>
    </div>
  );
};

TextSlide.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default TextSlide;
