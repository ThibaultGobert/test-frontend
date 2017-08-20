import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return(
      <div className="jumbotron">
        <h1>CodeFever home page</h1>
        <Link to="manage" className="btn btn-primary btn-lg">Manage lessons</Link>
      </div>
    );
  }
}

export default HomePage;
