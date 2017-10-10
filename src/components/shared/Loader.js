import React, { Component } from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

const CFLoader = ({active}) => {
    return(
      <Dimmer active={active}>
        <Loader size="medium">Loading</Loader>
      </Dimmer>
    );
}

export default CFLoader;
