import React from 'react';
import renderHtml from 'react-render-html';

const TextSlide = ({ title, content }) => {
  return (
    <div className="slide">
      <div className="text-slide slide-content">
        <h1>{title}</h1>
        <div className="text-slide-content">
          {renderHtml(content)}
        </div>
      </div>
    </div>
  );
};

export default TextSlide;
