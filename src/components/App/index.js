import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = (state) => {
  console.log(state.loggedIn);
  return {
    loggedIn: state.loggedIn
  };
};

export default connect(mapStateToProps)(App);
