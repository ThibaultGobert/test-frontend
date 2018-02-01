import React from 'react';
import { Dimmer, Loader as SemanticLoader } from 'semantic-ui-react';

const Loader = ({ active = false, message = 'Laden...' }) => {
  return (
    <Dimmer active={active}>
      <SemanticLoader size="medium">{message}</SemanticLoader>
    </Dimmer>
  );
};

export default Loader;
