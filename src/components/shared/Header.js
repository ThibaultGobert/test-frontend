import React from 'react';
import { IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
    </nav>
  );
};

export default Header;
