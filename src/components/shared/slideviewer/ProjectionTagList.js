import React from 'react';
import PropTypes from 'prop-types';
import {Icon} from 'semantic-ui-react';
import _ from 'lodash';

const ProjectionTagList = ({viewType}) => {
  let isClass = _.includes(viewType, "CLASS");
  let isProjection = _.includes(viewType, "PROJECTION");

  let classClassName = isClass? "active": "";
  let projectionClassName = isProjection ? "active": "";

  return (
    <div className="meta-list">
      <div className="meta-list">
        <span className="view-type">
          <Icon circular className={classClassName} name="group"/>
          <Icon circular className={projectionClassName} name="tv"/>
        </span>
      </div>
    </div>
  );
};

ProjectionTagList.propTypes = {
  viewType: PropTypes.string.isRequired
};

export default ProjectionTagList;
