import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import App from './App';

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn
  };
};

export default withRouter(connect(mapStateToProps)(App));
