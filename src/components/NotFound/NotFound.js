import React, { Component } from 'react';
import classNames from 'classnames';
import {NavLink} from 'react-router-dom';

import './NotFound.css';

class NotFound extends Component {
  render() {
    const {className, ...props} = this.props;

    return (
      <div className={classNames('NotFound', className)} {...props}>
        <div className="NotFound__Message">
          <h1>404</h1>
          <NavLink to="/">terug naar de <span className="NotFound__Message__Undeline">login</span> pagina</NavLink>
        </div>
      </div>
    );
  }
}

export default NotFound;
