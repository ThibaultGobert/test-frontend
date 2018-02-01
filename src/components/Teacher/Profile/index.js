import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapActionCreatorsToProps from '../../../functions/mapActionCreatorsToProps';

import {
  fetchProfileStart,
  fetchProfileSuccess,
  fetchProfileError,
} from '../../../actions/userAdministration';
import { logOut } from '../../../actions/auth';

import ProfileContainer from './ProfileContainer';

const mapStateToProps = (state) => {
  const { personalInformation } = state.loggedIn;
  return {
    personalInformation,
  };
};

const actionCreators = mapActionCreatorsToProps({
  fetchProfileStart,
  fetchProfileSuccess,
  fetchProfileError,
  logOut,
});

export default withRouter(connect(mapStateToProps, actionCreators)(ProfileContainer));
