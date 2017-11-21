import { connect } from 'react-redux';
import Teacher from './Teacher';

const mapStateToProps = (state) => {
  return {
    user: state.loggedIn
  };
};

export default connect(mapStateToProps)(Teacher);
