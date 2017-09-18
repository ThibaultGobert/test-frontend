import React from 'react';
import SlideTypeLabel from "../SlideTypeLabel";
import TagMetaList from "./TagMetaList";
import * as slideTypes from '../../../constants/slideTypes';

const TagBar = ({title, slideType, tags, viewType, isStudent}) => {
  return (
    <div className="tag-bar-wrapper ">
      <div className="tag-bar wrapper">
        <span className="meta-title">
          {title}
        </span>
        <span className="meta-slideType">
          {!isStudent && <SlideTypeLabel slideType={slideType} />}
        </span>
        <span className="meta-tags">
          { (slideType !== slideTypes.PROJECTION && !isStudent) &&  <TagMetaList tags={tags} viewType={viewType}/>}
        </span>
        <div className="clearfix"/>
      </div>
    </div>
  );
};

export default TagBar;
