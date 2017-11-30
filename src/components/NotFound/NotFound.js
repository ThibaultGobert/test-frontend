import React, { Component } from 'react';
import classNames from 'classnames';
import {NavLink} from 'react-router-dom';

import './NotFound.css';

class NotFound extends Component {
  render() {
    const {className, ...props} = this.props;

    return (
      <div className={classNames('NotFound', className)} {...props}>
        <h1>
          404 Not Found
        </h1>
        <NavLink to="/">Terug naar de login pagina</NavLink>
      </div>
    );
  }
}

export default NotFound;
