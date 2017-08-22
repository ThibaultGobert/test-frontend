import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <div className="header">
      <div className="banner">

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
