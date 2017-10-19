import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dimmer, Loader } from 'semantic-ui-react';

const CFLoader = ({active}) => {
    return(
      <Dimmer active={active}>
        <Loader size="medium">Loading</Loader>
      </Dimmer>
    );
};

CFLoader.propTypes = {
  active: PropTypes.bool.isRequired
};

export default CFLoader;
