import React from 'react';
import PropTypes from 'prop-types';
import {Icon} from 'semantic-ui-react';

const Reloader = ({action}) => {
  return(
    <div className="refresh-store">
      <Icon name="refresh"  onClick={action}/>
    </div>
  );
};

Reloader.propTypes = {
  action: PropTypes.func.isRequired
};

export default Reloader;
