import React from 'react';
import './Location.css';

const Location = ({ location }) => {
  return (
    <div className="container">
      <h1>{location.name}</h1>
    </div>
  );
};

export default Location;
