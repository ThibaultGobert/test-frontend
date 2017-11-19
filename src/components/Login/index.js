import { connect } from 'react-redux';
import mapActionCreatorsToProps from '../../functions/mapActionCreatorsToProps';
import { loginStart, loginSuccess, loginError, logOut } from '../../actions/auth';
import LoginContainer from './LoginContainer';

const mapStateToProps = state => ({
  loggedIn: state.loggedIn.data,
  loading: state.loggedIn.loading,
  error: state.loggedIn.error
});

const actionCreators = mapActionCreatorsToProps({
  loginStart,
  loginSuccess,
  loginError,
  logOut
});

export default connect(mapStateToProps, actionCreators)(LoginContainer);
