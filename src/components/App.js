import React  from 'react';
import PropTypes from 'prop-types';
import Header from './shared/Header';
//import {connect} from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <h1>Leerplatform</h1>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired // react router will pass there children in
};

export default App;
