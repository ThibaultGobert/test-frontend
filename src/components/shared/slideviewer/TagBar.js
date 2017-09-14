import React from 'react';
import SlideTypeLabel from "../SlideTypeLabel";
import TagMetaList from "./TagMetaList";

const TagBar = ({title, slideType, tags, viewType}) => {
  return (
    <div className="tag-bar-wrapper ">
      <div className="tag-bar wrapper">
        <span className="meta-title">
          {title}
        </span>
        <span className="meta-slideType">
          <SlideTypeLabel slideType={slideType} />
        </span>
        <span className="meta-tags">
          <TagMetaList tags={tags} viewType={viewType}/>
        </span>
        <div className="clearfix"/>
      </div>
    </div>
  );
};

export default TagBar;
