import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Student from './Student';

const mapStateToProps = state => {
  return {
    user: state.loggedIn.data,
    isBootstrapped: state.application.bootstrapped,
  };
};

export default withRouter(connect(mapStateToProps)(Student));
