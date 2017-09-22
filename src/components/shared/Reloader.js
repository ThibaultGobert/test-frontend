import React from 'react';
import {Icon} from 'semantic-ui-react';

const Reloader = ({action}) => {
  return(
    <div className="refresh-store">
      <Icon name="refresh"  onClick={action}/>
    </div>
  );
};

export default Reloader;
