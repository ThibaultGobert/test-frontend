import React from 'react';
import { Link, IndexLink } from 'react-router';
import {Button} from 'semantic-ui-react';

const Header = () => {
  return (
    <div className="header">
      <div className="banner">

      </div>
      <div className="header-bar">
        <div className="wrapper">
          <div className="header-lockup">
            <img className="logo" src={require('./../../../images/logo.png')} />
            <span className="welcome-message">Hey Simon De Gheselle</span>
          </div>

          <Button primary>Uitloggen</Button>
        </div>
        <div className="clearfix"></div>
      </div>

      <nav>
        <div className="ui attached stackable menu">
          <div className="ui container">
            <IndexLink to="/" activeClassName="active" className="item"><i className="home icon"></i> Home</IndexLink>
            <Link to="/manage/lessons" className="item" activeClassName="active"><i className="grid layout icon"></i> Lessons</Link>
            <Link to="/teacherprofile/overview" className="item" activeClassName="active"><i className="grid layout icon"></i> Lessenoverzicht</Link>

            <div className="right item">
              <div className="ui input"><input type="text" placeholder="Search..." />

              </div>
            </div>
          </div>
        </div>


      </nav>
    </div>
  );
};

export default Header;
