import React from 'react';
import {Icon} from 'semantic-ui-react';
import _ from 'lodash';

const ProjectionTagList = ({viewType}) => {
  return (
    <div className="meta-list">
      {mapProjectionViewType(viewType)}
    </div>
  );
};

function mapProjectionViewType(viewType) {
  let isClass = _.includes(viewType, "CLASS");
  let isProjection = _.includes(viewType, "PROJECTION");

  let classClassName = isClass? "active": "";
  let projectionClassName = isProjection ? "active": "";

  return (
    <div className="meta-list">
      <span className="view-type">
        <Icon circular className={classClassName} name="group"/>
        <Icon circular className={projectionClassName} name="tv"/>
      </span>
    </div>
  );
}

export default ProjectionTagList;
