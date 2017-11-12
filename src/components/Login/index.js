import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import mapActionCreatorsToProps from '../../functions/mapActionCreatorsToProps';
import { login, logOut } from '../../actions/auth';
import LoginContainer from './LoginContainer';

const mapStateToProps = state => ({
  loggedIn: state.loggedIn.data,
  loading: state.loggedIn.loading,
  error: state.loggedIn.error
});

const actionCreators = mapActionCreatorsToProps({
  login,
  logOut
});

export default connect(mapStateToProps, actionCreators)(LoginContainer);
