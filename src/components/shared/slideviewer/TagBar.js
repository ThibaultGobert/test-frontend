import React from 'react';
import PropTypes from 'prop-types';
import SlideTypeLabel from "../SlideTypeLabel";
import TagMetaList from "./TagMetaList";
import ProjectionTagList from './ProjectionTagList';
import * as slideTypes from '../../../constants/slideTypes';

const TagBar = ({title, version, slideType, tags, viewType, isStudent}) => {
  return (
    <div className="tag-bar-wrapper ">
      <div className="tag-bar wrapper">
        <span className="meta-title">
          {title} { !isStudent && version}
        </span>
        <span className="meta-slideType">
          {!isStudent && <SlideTypeLabel slideType={slideType} />}
        </span>
        <span className="meta-tags">
          { (slideType !== slideTypes.PROJECTION && !isStudent) &&  <TagMetaList tags={tags} viewType={viewType}/>}
          { (slideType == slideTypes.PROJECTION && !isStudent) &&  <ProjectionTagList viewType={viewType}/>}
        </span>
        <div className="clearfix"/>
      </div>
    </div>
  );
};

TagBar.propTypes = {
  title: PropTypes.string.isRequired,
  version: PropTypes.string,
  slideType: PropTypes.string.isRequired,
  tags: PropTypes.array,
  viewType: PropTypes.string.isRequired,
  isStudent: PropTypes.bool.isRequired
};

export default TagBar;
