import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapActionCreatorsToProps from '../../../functions/mapActionCreatorsToProps';

import {
  fetchProfileStart,
  fetchProfileSuccess,
  fetchProfileError,
  updateProfileStart,
  updateProfileSuccess,
  updateProfileError,
} from '../../../actions/userAdministration';
import {
  fetchContractsStart,
  fetchContractsSuccess,
  fetchContractsError,
} from '../../../actions/contracts';
import { logOut } from '../../../actions/auth';

import ProfileContainer from './ProfileContainer';

const mapStateToProps = (state) => {
  const { personalInformation } = state.loggedIn;
  const { contracts } = state;
  return {
    personalInformation,
    contracts,
  };
};

const actionCreators = mapActionCreatorsToProps({
  fetchProfileStart,
  fetchProfileSuccess,
  fetchProfileError,
  fetchContractsStart,
  fetchContractsSuccess,
  fetchContractsError,
  updateProfileStart,
  updateProfileSuccess,
  updateProfileError,
  logOut,
});

export default withRouter(connect(mapStateToProps, actionCreators)(ProfileContainer));
