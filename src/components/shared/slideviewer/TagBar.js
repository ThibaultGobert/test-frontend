import React from 'react';

const TagBar = ({tags}) => {
  return (
    <div className="tag-bar">
      {tags.map(tag => {
        return (
          <span className="tag">{tag}</span>
        );
      })}
    </div>
  );
};

export default TagBar;
