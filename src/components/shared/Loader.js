import React from 'react';
import PropTypes from 'prop-types';
import { Dimmer, Loader as SemanticLoader } from 'semantic-ui-react';

const Loader = ({active = false, message = 'Laden...' }) => {
    return(
      <Dimmer active={active}>
        <SemanticLoader size="medium">{message}</SemanticLoader>
      </Dimmer>
    );
};

Loader.propTypes = {
  active: PropTypes.bool
};

export default Loader;
