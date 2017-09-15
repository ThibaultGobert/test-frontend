import React, { Component } from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

const LoaderHOC = (propName) => (WrappedComponent) => {
  return class LoaderHOC extends Component {
    render() {
      return this.props[propName]
        ? <Dimmer active>
            <Loader size="medium">Loading</Loader>
          </Dimmer>
        : <WrappedComponent {...this.props}/>;
    }
  };
};

export default LoaderHOC;
