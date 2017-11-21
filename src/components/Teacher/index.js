import { connect } from 'react-redux';
import Teacher from './Teacher';

const mapStateToProps = (state) => {
  return {
    user: state.loggedIn.data,
    isBootstrapped: state.application.bootstrapped,
  };
};

export default connect(mapStateToProps)(Teacher);
