import React from 'react';
import { Loader as SemanticLoader } from 'semantic-ui-react';
import './Loader.css';

const Loader = ({ active = true, message = '' }) => {
  return (
    <div className="Loader">
      <SemanticLoader size="medium" inline="centered" active={active}>{message}</SemanticLoader>
    </div>
  );
};

export default Loader;
