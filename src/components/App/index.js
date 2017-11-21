import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import App from './App';

import mapActionCreatorsToProps from '../../functions/mapActionCreatorsToProps';
import { loginSuccess } from '../../actions/auth';

const actionCreators = mapActionCreatorsToProps({
  loginSuccess,
});

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn
  };
};

export default withRouter(connect(mapStateToProps, actionCreators)(App));
